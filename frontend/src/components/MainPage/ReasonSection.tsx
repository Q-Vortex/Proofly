import "./ReasonSection.css"

function ReasonSection() {
  return (
    <>
      <div className="reason_section">
        <div className="head_info">
          <h1>Why Choose Proofly?</h1>
          <p>Powerful features to validate your business ideas</p>
        </div>
        <div className="features_container">
          <div className="top_part">
            <div className="feature_card">
              <div className="feature_ico"><i className="fa-solid fa-bullseye"></i></div>
              <div className="feature_content">
                <h3>Unbiased AI Analysis</h3>
                <p>Leverage cutting-edge AI to get objective, data-driven feedback on your ideas, free from human bias.</p>
              </div>
            </div>
            <div className="feature_card">
              <div className="feature_ico"><i className="fa-solid fa-bolt-lightning"></i></div>
              <div className="feature_content">
                <h3>Actionable Insights</h3>
                <p>Go beyond simple feedback with concrete, implementable suggestions to refine and improve your project.</p>
              </div>
            </div>
          </div>
          <div className="bottom_part">
            <div className="feature_card">
              <div className="feature_ico"><i className="fa-solid fa-sack-dollar"></i></div>
              <div className="feature_content">
                <h3>Save Time & Money</h3>
                <p>Identify potential pitfalls early, avoiding costly mistakes and accelerating your path to success.</p>
              </div>
            </div>
            <div className="feature_card">
              <div className="feature_ico"><i className="fa-solid fa-palette"></i></div>
              <div className="feature_content">
                <h3>Boost Confidence</h3>
                <p>Gain clarity and conviction in your business decisions with validated market potential.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ReasonSection