import "./Testimonials.css"

function TestimonialsSection() {

  return (
    <>
      <div className="testimonials_section">
        <div className="head_info">
          <h1>What Our Users Say</h1>
          <p>Real feedback from successful entrepreneurs</p>
        </div>
        <div className="testimonial_card_container">
          <div className="testimonial_card">
            <div className="quote_ico">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className="feedback">Proofly completely changed how we approach new projects. The insights are invaluable and saved us months of development time!</p>
            <div className="user_info">
              <div className="user_ico">JD</div>
              <div className="info_content">
                <h3 className="name_surname">Jane Doe</h3>
                <p className="professional_title">CEO, InnovateTech</p>
              </div>
            </div>
          </div>
          <div className="testimonial_card">
            <div className="quote_ico">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className="feedback">The detailed reports are incredibly easy to understand and provide a clear roadmap for improvement. Highly recommend!</p>
            <div className="user_info">
              <div className="user_ico">JS</div>
              <div className="info_content">
                <p className="name_surname">John Smith</p>
                <p className="professional_title">Product Manager, GrowthLabs</p>
              </div>
            </div>
          </div>
          <div className="testimonial_card">
            <div className="quote_ico">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className="feedback">Finally, a tool that cuts through the noise and tells you what really matters. Our validation success rate has gone up significantly!</p>
            <div className="user_info">
              <div className="user_ico">AJ</div>
              <div className="info_content">
                <h3 className="name_surname">Alice Johnson</h3>
                <p className="professional_title">Founder, Startup Hub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialsSection