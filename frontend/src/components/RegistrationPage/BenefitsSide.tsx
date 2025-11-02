import "./BenefitsSide.css"
import logoImage from "../../../../logo_ico.svg"

function BenefitsSide() {
  return (
    <>
    <div className="benefits_side">
        <div className="logo_container">
          <img src={logoImage} alt="Logo" className="logo_icon" />
          <h1>Proofly</h1>
        </div>
        <div className="head_info">
          <h1>Join Thousands of Innovators</h1>
          <p>Make data-driven decisions and validate your ideas before investing time and money.</p>
        </div>
        <div className="benefits_list">
          <div className="benefit">
            <div className="benefit_icon"><i className="fa-solid fa-bolt-lightning"></i></div>
            <div className="benefit_content">
              <h3>Lightning Fast</h3>
              <p>Get validation results in 24-48 hours, not weeks</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit_icon"><i className="fa-solid fa-bullseye"></i></div>
            <div className="benefit_content">
              <h3>AI-Powered Insights</h3>
              <p>Advanced algorithms analyze market trends and competition</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit_icon"><i className="fa-solid fa-chart-simple"></i></div>
            <div className="benefit_content">
              <h3>Actionable Reports</h3>
              <p>Detailed recommendations to refine your concept</p>
            </div>
          </div>
          <div className="benefit">
            <div className="benefit_icon"><i className="fa-solid fa-lock"></i></div>
            <div className="benefit_content">
              <h3>100% Confidential</h3>
              <p>Your intellectual property stays protected</p>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default BenefitsSide