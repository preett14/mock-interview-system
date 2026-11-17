import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import InterviewSetup from "./InterviewSetup";
import InterviewRoom from "./InterviewRoom";
import Result from "./Result";

function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showInterviewSetup, setShowInterviewSetup] = useState(false);
  const [showInterviewRoom, setShowInterviewRoom] = useState(false);
  const [interviewSettings, setInterviewSettings] = useState(null);
  const [interviewAnswers, setInterviewAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");

  try {
    const url = isSignup
      ? "http://localhost:5000/api/users/signup"
      : "http://localhost:5000/api/users/login";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        isSignup
          ? { name, email, password }
          : { email, password }
      )
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage(data.message || "Something went wrong");
      return;
    }

    setMessage(data.message);

    if (!isSignup) {
      setIsLoggedIn(true);
    } else {
      setIsSignup(false);
      setName("");
      setPassword("");
    }

  } catch (error) {
    setMessage("Backend server is not connected!");
  }
};
  if (isLoggedIn) {

  if (showResult) {
    return (
      <Result
      answers={interviewAnswers}
        onDashboard={() => {
          setShowResult(false);
          setShowInterviewRoom(false);
          setShowInterviewSetup(false);
        }}
      />
    );
  }

  if (showInterviewRoom) {
    return (
      <InterviewRoom
        settings={interviewSettings}
        onExit={() => {
          setShowInterviewRoom(false);
          setShowInterviewSetup(false);
        }}
        onFinish={(answers) => {
  setInterviewAnswers(answers);
  setShowResult(true);
}}
      />
    );
  }

  if (showInterviewSetup) {
    return (
      <InterviewSetup
        onBack={() => setShowInterviewSetup(false)}
        onStartInterview={(settings) => {
          setInterviewSettings(settings);
          setShowInterviewRoom(true);
        }}
      />
    );
  }

  return (
    <Dashboard
      onStartNewInterview={() => setShowInterviewSetup(true)}
    />
  );
}
  return (
    <div className="app-container">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">
          <span className="logo-icon">✦</span>
          Vox<span className="logo-highlight">Prep</span>
          <span className="logo-ai">AI</span>
        </h2>

        <div className="nav-right">
          <span>Already have an account?</span>
          <button
            className="nav-login"
            onClick={() => setIsSignup(false)}
          >
            Log in
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <main className="main-section">

        {/* Left Content */}
        <section className="hero-section">

          <div className="hero-badge">
            <span className="badge-dot"></span>
            AI POWERED INTERVIEW PLATFORM
          </div>

          <h1>
            Your Next Big
            <br />
            Opportunity
            <br />
            Starts <span>Here.</span>
          </h1>

          <p className="hero-description">
            Practice smarter, speak confidently, and get interview-ready
            with your personal AI interview assistant.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon">✦</span>
              <div>
                <h4>AI-Powered Interviews</h4>
                <p>Practice with intelligent AI questions.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">◉</span>
              <div>
                <h4>Real-Time Feedback</h4>
                <p>Discover your strengths and improve.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-icon">↗</span>
              <div>
                <h4>Build Your Confidence</h4>
                <p>Prepare for your next career opportunity.</p>
              </div>
            </div>
          </div>

          <div className="hero-footer">
            <span>✦</span> Your preparation. Your progress. Your success.
          </div>

        </section>

        {/* Login Signup Card */}
        <section className="auth-section">

          <div className="auth-card">

            <div className="card-top-icon">✦</div>

            <div className="auth-heading">
              <h2>{isSignup ? "Create your account" : "Welcome back!"}</h2>

              <p>
                {isSignup
                  ? "Start your journey towards interview success."
                  : "Enter your details to continue your journey."}
              </p>
            </div>

            <div className="auth-tabs">
              <button
                className={!isSignup ? "active" : ""}
                onClick={() => setIsSignup(false)}
              >
                Login
              </button>

              <button
                className={isSignup ? "active" : ""}
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit}>

              {isSignup && (
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
/>
                </div>
              )}

              <div className="input-group">
                <label>Email Address</label>
                <input
  type="email"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
              </div>

              <div className="input-group">
                <label>Password</label>

                <div className="password-box">
                 <input
  type={showPassword ? "text" : "password"}
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  minLength="6"
/>

                  <button
                    type="button"
                    className="show-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {!isSignup && (
                <div className="form-options">
                  <label className="remember">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <button type="button" className="forgot-password">
                    Forgot password?
                  </button>
                </div>
              )}

              <button type="submit" className="submit-btn">
                {isSignup ? "Create Account" : "Login to VoxPrep"}
                <span> → </span>
              </button>

            </form>

            {message && <p className="auth-message">{message}</p>}

            <div className="divider">
              <span>OR</span>
            </div>

            <p className="switch-text">
              {isSignup
                ? "Already have an account?"
                : "Don't have an account?"}

              <button onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? " Login" : " Sign up"}
              </button>
            </p>

            <p className="terms">
              By continuing, you agree to our
              <span> Terms of Service </span>and
              <span> Privacy Policy.</span>
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;