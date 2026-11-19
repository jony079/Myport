import "./styles/Career.css";
import { FaAward, FaFlask, FaUserTie, FaChalkboardTeacher, FaCertificate } from "react-icons/fa";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Research & <span>Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* ITEM 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <div className="career-role-header">
                  <FaFlask className="career-icon" />
                  <h4>Undergraduate Researcher</h4>
                </div>
                <h5>Battery Research Group • Department of MSE, RUET</h5>
              </div>
              <h3>2024 - NOW</h3>
            </div>
            <p>
              Leading closed-loop computational research on defect-engineered Ti3C2Tx (MXene) flexible sodium-ion battery anodes combining DFT with GNN and Bayesian optimization. Executed Quantum ESPRESSO 7.5 SCF, slab relaxations (28 Å vacuum), and CI-NEB Na+ migration barriers. Designed 5-phase municipal water decontamination framework.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <div className="career-role-header">
                  <FaAward className="career-icon highlight" />
                  <h4>Top 15 National Finalist</h4>
                </div>
                <h5>Energy Innovation Challenge 2026 • ActionAid & Praan</h5>
              </div>
              <h3>AUG 2026</h3>
            </div>
            <p>
              Selected among top 15 national finalists for the "Next-Gen Sodium-Ion Battery Anodes (IP-NPC)" biomass upcycling concept. Programmed interactive Streamlit app and custom HTML5 canvas visualization of Na+ insertion/extraction and capacity retention curves; delivered solo presentation at the Grand Finale in Dhaka.
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <div className="career-role-header">
                  <FaUserTie className="career-icon" />
                  <h4>Class Representative (CR)</h4>
                </div>
                <h5>Department of Materials Science & Engineering • RUET</h5>
              </div>
              <h3>2024 - NOW</h3>
            </div>
            <p>
              Elected student representative coordinating academic communications between department faculty, course instructors, and undergraduate peers. Facilitated laboratory scheduling, technical study groups, and departmental academic coordination.
            </p>
          </div>

          {/* ITEM 4 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <div className="career-role-header">
                  <FaChalkboardTeacher className="career-icon" />
                  <h4>Science Mentor & Private Tutor</h4>
                </div>
                <h5>Advanced Physics, Chemistry & Math • Rajshahi</h5>
              </div>
              <h3>2023 - NOW</h3>
            </div>
            <p>
              Delivered concept-based mentorship in Newtonian mechanics, thermodynamics, electromagnetism, and higher mathematics for competitive SSC and HSC candidates, grounding students in rigorous first-principles derivations.
            </p>
          </div>
        </div>

        {/* CERTIFICATIONS & HONORS */}
        <div className="certifications-container">
          <div className="cert-header">
            <FaCertificate className="cert-main-icon" />
            <h3>Professional Certifications & Training</h3>
          </div>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-badge">Anthropic</div>
              <h4>Claude Code in Action</h4>
              <p>Jul 2026 • AI-Augmented Software Development</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge">Anthropic</div>
              <h4>Claude Code 101</h4>
              <p>Jun 2026 • Agentic Tooling & System Prompts</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge">Anthropic</div>
              <h4>AI Fluency Framework & Foundations</h4>
              <p>Jun 2026 • Prompt Engineering & AI Reasoning</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge">Elsevier</div>
              <h4>Gen AI in Research Workflow</h4>
              <p>Jun 2026 • Elsevier Researcher Academy</p>
            </div>
            <div className="cert-card">
              <div className="cert-badge">Elsevier</div>
              <h4>Identifying Research Gaps</h4>
              <p>Jun 2026 • Elsevier Researcher Academy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
