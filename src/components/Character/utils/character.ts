import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                // Adjust character colors to match Tayve's profile
                const mat = mesh.material as THREE.MeshStandardMaterial;
                if (mat && mat.color) {
                  const r = mat.color.r, g = mat.color.g, b = mat.color.b;

                  // Skin tone (Material.025) — warm South Asian tone
                  if (r > 0.9 && g > 0.85 && g < 0.95 && b > 0.8 && b < 0.9) {
                    mat.color.setRGB(0.65, 0.45, 0.32);
                  }

                  // Default material (shirt/body ~0.8, 0.8, 0.8) — dark teal shirt
                  if (Math.abs(r - 0.8) < 0.05 && Math.abs(g - 0.8) < 0.05 && Math.abs(b - 0.8) < 0.05) {
                    mat.color.setRGB(0.05, 0.18, 0.25);
                  }

                  // Gray accessories (Material.024 ~0.5) — darker steel
                  if (Math.abs(r - 0.5) < 0.05 && Math.abs(g - 0.5) < 0.05 && Math.abs(b - 0.5) < 0.05) {
                    mat.color.setRGB(0.15, 0.15, 0.2);
                  }

                  // Lighter gray element (Material.027 ~0.78) — slightly warmer
                  if (Math.abs(r - 0.78) < 0.05 && Math.abs(g - 0.78) < 0.05 && Math.abs(b - 0.78) < 0.05) {
                    mat.color.setRGB(0.55, 0.42, 0.32);
                  }
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
