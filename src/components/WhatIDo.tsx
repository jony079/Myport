import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" id="what-i-do">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* CARD 1: Computational Materials & DFT */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>COMPUTATIONAL DFT</h3>
              <h4>First-Principles Electronic Modeling</h4>
              <p>
                DFT calculations in Quantum ESPRESSO 7.5: SCF convergence, Ti3AlC2 MAX phases, bare Ti3C2 MXene slab relaxation (28 Å vacuum), and climbing-image NEB (CI-NEB) Na+ diffusion barrier evaluations.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Quantum ESPRESSO</div>
                <div className="what-tags">DFT</div>
                <div className="what-tags">CI-NEB</div>
                <div className="what-tags">pymatgen</div>
                <div className="what-tags">Materials Project</div>
                <div className="what-tags">VESTA</div>
                <div className="what-tags">OVITO</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 2: Machine Learning & Alloy Design */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ML ALLOY DESIGN</h3>
              <h4>Predictive Virtual Screening & Metallurgy</h4>
              <p>
                Coupling gradient boosting regressors and Magpie atomic descriptors with metallurgical constraints to discover Re-free Fe-Ni superalloys (Pareto #3, ~6.8% lighter) and creep-resistant martensitic steels.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Scikit-learn</div>
                <div className="what-tags">Gradient Boosting</div>
                <div className="what-tags">Magpie Descriptors</div>
                <div className="what-tags">Pareto Screening</div>
                <div className="what-tags">Metallurgy</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* CARD 3: Energy Storage & Batteries */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ENERGY STORAGE</h3>
              <h4>Sodium-Ion Anodes & Biomass Upcycling</h4>
              <p>
                Engineering nitrogen-doped porous carbon (IP-NPC) from wheat flour to buffer cycling expansion. Closed-loop discovery workflows for defect-engineered Ti3C2Tx MXenes, SEI modeling, and Streamlit apps.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Sodium-Ion Batteries</div>
                <div className="what-tags">Biomass Upcycling</div>
                <div className="what-tags">MXenes</div>
                <div className="what-tags">SEI Modeling</div>
                <div className="what-tags">Streamlit</div>
                <div className="what-tags">Plotly</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
