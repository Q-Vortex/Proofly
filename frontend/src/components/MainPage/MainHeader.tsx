import { useEffect, useState } from 'react';
import { auth } from "../../firebase";

import LogoIco from "../../../../logo_ico.svg"
import "./MainHeader.css"

function useCheckUserStatus() {
  const [status, setStatus] = useState<"loading" | "unregistered" | "unverified" | "verified">("loading");

  useEffect(() => {
    const checkUser = async () => {
      const user = auth.currentUser;

      if (!user) {
        setStatus("unregistered");
        return;
      }

      await user.reload(); // чтобы получить актуальные данные (например, emailVerified)

      if (!user.emailVerified) {
        setStatus("unverified");
        return;
      }

      setStatus("verified");
    };

    checkUser();

    // можно подписаться на изменения Auth в реальном времени
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setStatus("unregistered");
        return;
      }
      await user.reload();
      setStatus(user.emailVerified ? "verified" : "unverified");
    });

    return () => unsubscribe();
  }, []);

  return status;
}

function MainHeader() {
  const userStatus = useCheckUserStatus();

  return (
    <header>
      <a className="link_logo" href="/">
        <img src={LogoIco} alt="LogoIco" className="logo_ico" />
        <h2>Proofly</h2>
      </a>
      <nav className="nav_links">
        <a href="#HowItWorks" className="how_it_work">How It Works</a>
        <a href="" className="features">Features</a>
        <a href="" className="pricing">Pricing</a>
        <a href="" className="testimonials">Testimonials</a>
      </nav>

      {userStatus === "unregistered" ? (
        <div className="auth_buttons">
          <a href="/register" className="btn_primary">Sign up</a>
          <a href="" className="btn_secondary">Log in</a>
        </div>
      ) : (
        <a href="" className="user_icon">
          <i className="fa-solid fa-user"></i>
        </a>
      )}
    </header>
  )
}

export default MainHeader