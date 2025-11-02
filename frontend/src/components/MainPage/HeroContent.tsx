import UX0X1 from "../../assets/ux_0x1.png"
import "./HeroContent.css"

function HeroContetn() {
  return (
    <>
      <div className="hero_content_container">
        <div className="hero_content">
          <h1>
            <p className="first_part">Validate Your</p>
            <p className="second_part">Idea</p>
          </h1>
          <p>Find out if your idea is worth pursuing before wasting weeks and money. Get real market validation in days, not months.</p>
          <div className="hero_buttons">
            <a href="" className="btn_primary">Get Started Now</a>
            <a href="" className="btn_secondary">How It Works</a>
          </div>
        </div>
        <img src={UX0X1} alt="ux" className="ux_0x1" />
      </div>
    </>
  )
}

export default HeroContetn