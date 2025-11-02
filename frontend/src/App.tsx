import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainHeader from "./components/MainPage/MainHeader"
import HeroContent from "./components/MainPage/HeroContent"
import HowItWorksSection from './components/MainPage/HowItWorks'
import ReasonSection from './components/MainPage/ReasonSection'
import TestimonialsSection from './components/MainPage/Testimonials'
import CTASection from './components/MainPage/CTASection'
import MainFooter from './components/MainPage/MainFooter'
import RegistrationContainer from "./components/RegistrationPage/RegistrationContainer"

function MainPage() {
  return (
    <>
      <MainHeader />
      <main>
        <HeroContent />
        <HowItWorksSection />
        <ReasonSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <MainFooter />
    </>
  )
}

function RegistrationPage() {
  return (
    <>
      <RegistrationContainer/>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App