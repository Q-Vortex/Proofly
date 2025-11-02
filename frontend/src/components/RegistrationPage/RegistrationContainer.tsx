import "./RegistrationContainer.css"
import RegistrationForm from "./RegistrationForm"
import BenefitsSide from "./BenefitsSide"

function RegistrationContainer() {
  return ( 
    <>
    <div className="content">
        <div className="registration_container">
          <RegistrationForm />
          <BenefitsSide />
        </div>
    </div>

    </>
  )
}

export default RegistrationContainer