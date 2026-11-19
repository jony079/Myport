import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MD TAYVE
              <br />
              <span>HOSSIN JONY</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Materials Science & Eng.</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">RESEARCHER</div>
              <div className="landing-h2-2">ML DESIGNER</div>
            </h2>
            <h2>
              <div className="landing-h2-info">COMPUTATIONAL</div>
              <div className="landing-h2-info-1">ENERGY STORAGE</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
