import "./MainFooter.css"

function MainFooter() {
  return (
    <>
      <div className="main_footer">
        <div className="footer_top">
          <div className="footer_section">
            <h4>Proofly</h4>
            <div className="info_content">
              <p>Boost your brand by staying updated through our social media channels.</p>
              <div className="social_media_container">
                <a href="" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="" className="twiter"><i className="fa-brands fa-twitter"></i></a>
                <a href="" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="" className="instagram"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="footer_section">
            <h4>Resources</h4>
            <div className="info_content">
              <a href="">How It Works</a>
              <a href="">FAQ</a>
              <a href="">Detailed Report</a>
              <a href="">Blog</a>
            </div>
          </div>
          <div className="footer_section">
            <h4>Legal</h4>
            <div className="info_content">
              <a href="">About Us</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
              <a href="">Cookie Policy</a>
            </div>
          </div>
          <div className="footer_section">
            <h4>Support</h4>
            <div className="info_content">
              <a href="">Contact Us</a>
              <a href="">Help Center</a>
              <a href="">API Documentation</a>
              <a href="">Status Page</a>
            </div>
          </div>
        </div>
        <div className="footer_bottom">© 2025 Proofly. All rights reserved.</div>
      </div>
    </>
  )
}

export default MainFooter