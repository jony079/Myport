import "./styles/About.css";
import { FaGraduationCap, FaAward, FaAtom, FaFlask } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Materials Science and Engineering undergraduate at Rajshahi University
          of Engineering & Technology (RUET) working at the intersection of
          computational materials science, physics-informed machine learning,
          and next-generation energy storage.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">
              <FaGraduationCap />
            </div>
            <div className="about-card-content">
              <h4>B.Sc. in Materials Science & Engineering</h4>
              <p className="about-card-subtitle">
                Rajshahi University of Engineering & Technology (RUET)
              </p>
              <p className="about-card-text">
                Rigorous training in Crystallography, Thermodynamics of Materials, Phase Transformations, Mechanics of Solids, Fluid Mechanics, Statistics, and Linear Algebra.
              </p>
            </div>
          </div>

          <div className="about-card highlight">
            <div className="about-card-icon">
              <FaAward />
            </div>
            <div className="about-card-content">
              <h4>Top 15 National Finalist — Energy Innovation 2026</h4>
              <p className="about-card-subtitle">
                ActionAid Bangladesh & Praan • Grand Finale, Dhaka
              </p>
              <p className="about-card-text">
                Pioneered upcycled biomass-derived nitrogen-doped porous carbon (IP-NPC) anodes for sodium-ion batteries, featuring custom animated electrochemical simulations.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaAtom />
            </div>
            <div className="about-card-content">
              <h4>Computational Materials & DFT</h4>
              <p className="about-card-subtitle">
                Quantum ESPRESSO • CI-NEB • GNN & BayesOpt
              </p>
              <p className="about-card-text">
                First-principles electronic calculations, Ti3AlC2 MAX phase and Ti3C2 MXene slab relaxation, climbing-image NEB ion migration modeling, and Magpie ML descriptors.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <FaFlask />
            </div>
            <div className="about-card-content">
              <h4>Experimental & Metallurgical Testing</h4>
              <p className="about-card-subtitle">
                Optical Microscopy • ImageJ • UTM Testing
              </p>
              <p className="about-card-text">
                Metallographic sample preparation, Nital etching, dendritic microstructure analysis, digital phase-fraction segmentation, and universal tensile machine diagnostics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
