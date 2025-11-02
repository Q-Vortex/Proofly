import "./HowItWorks.css"

function HowItWorksSection() {
 return (
  <>
    <div className="how_it_works_section" id="HowItWorks">
      <div className="head_info">
         <h1>Our Simple 3-Step Process</h1>
         <p>Validate your idea in just a few clicks</p>
      </div>
       <div className="process_steps">
         <div className="step_cart">
           <div className="step_icon" data-index="1">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            </div>
           <h3>Upload Your Materials</h3>
           <p>Easily submit your project details, landing page, and target audience for analysis.</p>
         </div>
         <div className="step_cart">
           <div className="step_icon" data-index="2">
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
           <h3>Validation & Analysis</h3>
           <p>Our AI-powered engine quickly processes your data, identifying key strengths and weaknesses.</p>
         </div>
         <div className="step_cart">
           <div className="step_icon" data-index="3">
            <i className="fa-solid fa-chart-simple"></i>
            </div>
           <h3>Results & Statistics</h3>
           <p>Receive clear, actionable insights and detailed reports to guide your next steps.</p>
         </div>
       </div>
    </div>
  </>
 )
}

export default HowItWorksSection