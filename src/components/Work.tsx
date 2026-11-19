import { useState, useRef, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface Project {
  num: string;
  title: string;
  category: string;
  badge: string;
  tools: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    num: "01",
    title: "ML Design of Re-Free Superalloys",
    category: "Aerospace Materials & ML",
    badge: "3D Superalloy Lattice",
    tools: "Python • Scikit-learn • Gradient Boosting • Magpie • Pareto Optimization",
    description:
      "Coupled gradient boosting regressors with metallurgical phase stability constraints to discover 'Pareto Candidate #3': 7.631 g/cm³ density (~6.8% lighter than Inconel 718) and ~136.4 h creep rupture life at 750 °C / 130 MPa with zero rhenium.",
    link: "https://github.com/jony079",
    image: "/images/project-1.jpg",
  },
  {
    num: "02",
    title: "Virtual Screening of Martensitic Steels",
    category: "Creep Rupture Life Prediction",
    badge: "Microstructure & Creep",
    tools: "Python • Gradient Boosting • Magpie Descriptors • Physical Metallurgy",
    description:
      "High-throughput screening pipeline linking atomic descriptors with creep rupture behavior across thousands of compositions. Discovered optimized 8.53 wt% Cr steel with predicted creep life of ~15,572 h at 600 °C / 130 MPa.",
    link: "https://github.com/jony079",
    image: "/images/project-2.jpg",
  },
  {
    num: "03",
    title: "Next-Gen Sodium-Ion Battery Anodes",
    category: "Energy Innovation 2026 Finalist",
    badge: "3D Biomass Anode & Na+ Intercalation",
    tools: "Streamlit • HTML5 Canvas • Electrochemistry • Battery Kinetics • Biomass",
    description:
      "Upcycling agricultural biomass (wheat flour, urea, K2C2O4) into nitrogen-doped porous carbon (IP-NPC) to buffer expansion. Built interactive Streamlit app and HTML5 animation of Na+ insertion and SEI growth for national Grand Finale pitch.",
    link: "https://github.com/jony079",
    image: "/images/project-3.jpg",
  },
  {
    num: "04",
    title: "Cubic Crystal & XRD Visualizer",
    category: "Interactive 3D Web Application",
    badge: "3D Lattice & Miller Planes",
    tools: "Python • Streamlit • Plotly • 3D Crystallography • XRD Physics",
    description:
      "Interactive 3D crystallography suite rendering SC, BCC, FCC, and HCP unit cells and custom Miller planes (hkl) in real time with intersection analysis, automated Bragg peak indexing, and structure factor derivations.",
    link: "https://github.com/jony079",
    image: "/images/project-4.jpg",
  },
  {
    num: "05",
    title: "Multi-Alloy Phase Diagram Simulator",
    category: "Thermodynamics & Kinetics",
    badge: "3D Phase Space & CCT Kinetics",
    tools: "Python • Streamlit • NumPy • Lever Rule • Andrews Equation",
    description:
      "Thermodynamic phase equilibrium modeling suite with lever rule calculation, Andrews Ms martensite start prediction, Continuous Cooling Transformation (CCT) curves, and hardness estimation for Fe-C, Cu-Ni, and Cu-Ag systems.",
    link: "https://github.com/jony079",
    image: "/images/project-5.jpg",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(580);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Measure card width dynamically on resize
  useEffect(() => {
    const updateWidth = () => {
      const firstBox = document.querySelector(".work-box") as HTMLElement;
      if (firstBox) {
        setCardWidth(firstBox.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        {/* SECTION HEADER WITH TITLE & COUNTER */}
        <div className="work-header">
          <h2>
            Featured <span>Research & Projects</span>
          </h2>
          <div className="work-header-controls">
            <span className="work-counter">
              <span className="counter-curr">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total">{String(projects.length).padStart(2, "0")}</span>
            </span>
            <div className="work-header-btns">
              <button
                className="work-btn-circle"
                onClick={handlePrev}
                aria-label="Previous project"
                title="Previous project"
              >
                <FaChevronLeft />
              </button>
              <button
                className="work-btn-circle"
                onClick={handleNext}
                aria-label="Next project"
                title="Next project"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* CAROUSEL SLIDER WRAPPER WITH FLOATING SIDE BUTTONS */}
        <div
          className="work-carousel-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* FLOATING LEFT SIDE BUTTON */}
          <button
            className="work-side-nav work-side-prev"
            onClick={handlePrev}
            aria-label="Previous Project"
            title="Slide left"
          >
            <FaChevronLeft />
          </button>

          {/* SLIDER VIEWPORT */}
          <div className="work-slider-window">
            <div
              className="work-flex"
              ref={trackRef}
              style={{
                transform: `translateX(-${currentIndex * (cardWidth + 28)}px)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  className={`work-box ${index === currentIndex ? "work-box-active" : ""}`}
                  key={index}
                >
                  <div className="work-info">
                    <div className="work-title">
                      <h3>{project.num}</h3>
                      <div>
                        <h4>{project.title}</h4>
                        <p className="work-cat">{project.category}</p>
                      </div>
                    </div>
                    <p className="work-desc">{project.description}</p>
                    <div className="work-tools-box">
                      <h4>Tools & Methods</h4>
                      <p className="work-tools">{project.tools}</p>
                    </div>
                  </div>
                  <WorkImage
                    image={project.image}
                    alt={project.title}
                    link={project.link}
                    badge={project.badge}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* FLOATING RIGHT SIDE BUTTON */}
          <button
            className="work-side-nav work-side-next"
            onClick={handleNext}
            aria-label="Next Project"
            title="Slide right"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* BOTTOM PAGINATION INDICATOR TABS */}
        <div className="work-pagination">
          {projects.map((proj, idx) => (
            <button
              key={idx}
              className={`work-dot ${idx === currentIndex ? "work-dot-active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to project ${proj.num}`}
            >
              <span className="dot-num">{proj.num}</span>
              <span className="dot-label">{proj.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
