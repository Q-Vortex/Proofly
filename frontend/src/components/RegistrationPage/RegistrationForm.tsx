import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc, getFirestore, serverTimestamp } from "firebase/firestore";
import "./RegistrationForm.css"

const db = getFirestore();


interface RegisterUserParams {
  fullName: string;
  email: string;
  password: string;
  company?: string;
  termsAccepted: boolean;
}

async function registerUser({
  fullName,
  email,
  password,
  company,
  termsAccepted,
}: RegisterUserParams) {
  if (!termsAccepted) throw new Error("You must accept Terms and Privacy Policy");
  if (password.length < 12) throw new Error("Password too short, minimum 12 characters");

  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // создаём токен проверки (вместо JWT можно просто timestamp)
  const verificationToken = Math.random().toString(36).substring(2, 15);
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 минут

  await setDoc(doc(db, "users", user.uid), {
    fullName,
    email,
    company: company || null,
    verificationToken,
    tokenExpiresAt: expiresAt,
    createdAt: serverTimestamp(),
  });

  try {
    await sendEmailVerification(user);
    console.log("Verification email sent");
  } catch (err) {
    console.error("Failed to send verification email:", err);
  }

  return { uid: user.uid, email: user.email };
}

function RegistrationForm() {
  const navigate = useNavigate();

  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const companyRef = useRef<HTMLInputElement | null>(null);
  const termsRef = useRef<HTMLInputElement | null>(null);

  const fullNameErrorRef = useRef<HTMLInputElement | null>(null);
  const emailErrorRef = useRef<HTMLInputElement | null>(null);
  const passwordErrorRef = useRef<HTMLInputElement | null>(null);
  const companyErrorRef = useRef<HTMLInputElement | null>(null);
  const termsErrorRef = useRef<HTMLInputElement | null>(null);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Сбрасываем предыдущие ошибки
    fullNameErrorRef.current!.textContent = "";
    emailErrorRef.current!.textContent = "";
    passwordErrorRef.current!.textContent = "";
    companyErrorRef.current!.textContent = "";
    termsErrorRef.current!.textContent = "";

    if (!fullNameRef.current || !emailRef.current || !passwordRef.current || !termsRef.current) {
      console.warn("Form not ready");
      return;
    }

    let hasError = false;

    const fullName = fullNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const company = companyRef.current?.value.trim() || undefined;
    const termsAccepted = termsRef.current.checked;

    if (!fullName) {
      fullNameErrorRef.current!.textContent = "Full name is required";
      hasError = true;
    }

    if (!email) {
      emailErrorRef.current!.textContent = "Email is required";
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      
      emailErrorRef.current!.textContent = "Invalid email format";
      hasError = true;
    }

    if (!password) {
      passwordErrorRef.current!.textContent = "Password is required";
      hasError = true;
    } else if (password.length < 12) {
      passwordErrorRef.current!.textContent = "Password must be at least 12 characters";
      hasError = true;
    }

    if (!termsAccepted) {
      termsErrorRef.current!.textContent = "You must accept Terms and Privacy Policy";
      hasError = true;
    }

    if (hasError) return;

    try {
      await registerUser({ fullName, email, password, company, termsAccepted });
      alert("Account created! Please verify your email.");
      navigate("/");
    } catch (error: unknown) {
      console.log(error)
      let message = "Error occurred, please try again";
      if (error instanceof Error) {
        if (error.message.includes("auth/email-already-in-use")) {
          emailErrorRef.current!.textContent = "This email is already registered";
        } else if (error.message.includes("auth/invalid-email")) {
          emailErrorRef.current!.textContent = "Please enter a valid email address";
        } else if (error.message.includes("auth/weak-password")) {
          passwordErrorRef.current!.textContent = "Password is too weak, try something stronger";
        }
      }

      alert(message);
    }
  };

  return (
    <>
      <div className="registration_form">
        <div className="head_info">
          <h1>Create Account</h1>
          <p>Start validating your ideas today - it's free!</p>
        </div>
        <form  onSubmit={handleSubmit}>
          <div className="input_container input_fullname_container">
            <p className="input_info_head">Full Name</p>
            <div className="input_content">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="John Doe" ref={fullNameRef} />
            </div>
            <p className="error_message" ref={fullNameErrorRef}></p>
          </div>

          <div className="input_container input_email_container">
            <p>Email</p>
            <div className="input_content">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="you@example.com" ref={emailRef}/>
            </div>
            <p className="error_message" ref={emailErrorRef}></p>
          </div>

          <div className="input_container input_password_container">
            <p>Password</p>
            <div className="input_content">
              <i className="fa-solid fa-key"></i>
              <input type="password" placeholder="Create a strong password" ref={passwordRef}/>
            </div>
            <p className="error_message" ref={passwordErrorRef}></p>
          </div>

          <div className="input_container input_CoP_name_container">
            <p>Company or Project Name</p>
            <div className="input_content">
              <i className="fa-solid fa-briefcase"></i>
              <input type="text" placeholder="Optional" ref={companyRef}/>
            </div>
            <p className="error_message" ref={companyErrorRef}></p>
          </div>

          <div className="checkbox_container">
            <input type="checkbox" id="terms" ref={termsRef}/>
            <label htmlFor="terms">I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></label>
          </div>
          <p className="error_message" ref={termsErrorRef}></p>
          <button type="submit"><h3>Create Account</h3></button>
        </form>

        <div className="social_login">
          <div className="divider">
            <p>OR SIGN UP WITH</p>
          </div>
          <div className="btn_social google">
            <i className="fa-brands fa-google"></i>
            <p>Google</p>
          </div>
        </div>

        <div className="signin_prompt">
          <label>Already have an account? <a href="/login">Sign in</a></label>
        </div>
      </div>
    </>
  )
}

export default RegistrationForm