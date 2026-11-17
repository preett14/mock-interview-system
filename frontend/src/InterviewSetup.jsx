import { useState } from "react";
import "./InterviewSetup.css";

function InterviewSetup({ onBack, onStartInterview }) {
  const [category, setCategory] = useState("HR Interview");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [duration, setDuration] = useState("20 Minutes");

  const categories = [
    { name: "HR Interview", icon: "👔", desc: "Common HR questions" },
    { name: "Java Development", icon: "☕", desc: "Core Java & Advanced Java" },
    { name: "MERN Stack", icon: "💻", desc: "MongoDB, Express, React, Node" },
    { name: "DSA", icon: "🧠", desc: "Data Structures & Algorithms" },
    { name: "Data Analyst", icon: "📊", desc: "Excel, SQL & Power BI" },
    { name: "General Technical", icon: "⚡", desc: "Technical knowledge" },
  ];

  const handleStart = () => {
    onStartInterview?.({
      category,
      difficulty,
      duration,
    });
  };

 return (
  <div className="setup-page">

    <header className="setup-navbar">
      <h2 className="setup-logo">
        ✦ Vox<span>Prep</span> <small>AI</small>
      </h2>

      <button className="back-btn" onClick={onBack}>
        ← Back to Dashboard
      </button>
    </header>

    <main className="setup-container">

      <div className="setup-heading">
        <span className="setup-badge">✦ AI INTERVIEW ASSISTANT</span>
        <h1>Customize Your <span>Interview</span></h1>
        <p>
          Choose your preferences and get ready for your AI-powered
          interview experience.
        </p>
      </div>

      <section className="setup-section">
        <div className="section-title">
          <h2>01. Select Interview Category</h2>
          <span>Choose your field</span>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <button
              key={item.name}
              className={`setup-category ${
                category === item.name ? "selected" : ""
              }`}
              onClick={() => setCategory(item.name)}
            >
              <div className="category-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              {category === item.name && (
                <span className="selected-check">✓</span>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="setup-section">
        <div className="section-title">
          <h2>02. Select Difficulty Level</h2>
          <span>Set your challenge</span>
        </div>

        <div className="option-grid">
          {["Beginner", "Intermediate", "Advanced"].map((item) => (
            <button
              key={item}
              className={`option-card ${
                difficulty === item ? "selected" : ""
              }`}
              onClick={() => setDifficulty(item)}
            >
              <span>
                {item === "Beginner" ? "🌱" :
                 item === "Intermediate" ? "🚀" : "🔥"}
              </span>

              <h3>{item}</h3>

              <small>
                {item === "Beginner"
                  ? "Start with basics"
                  : item === "Intermediate"
                  ? "Test your knowledge"
                  : "Challenge yourself"}
              </small>
            </button>
          ))}
        </div>
      </section>

      <section className="setup-section">
        <div className="section-title">
          <h2>03. Interview Duration</h2>
          <span>Choose your time</span>
        </div>

        <div className="duration-options">
          {["10 Minutes", "20 Minutes", "30 Minutes"].map((item) => (
            <button
              key={item}
              className={`duration-btn ${
                duration === item ? "selected" : ""
              }`}
              onClick={() => setDuration(item)}
            >
              ⏱ {item}
            </button>
          ))}
        </div>
      </section>

      <div className="setup-summary">
        <div>
          <span>YOUR INTERVIEW</span>
          <h3>{category}</h3>
          <p>{difficulty} Level • {duration}</p>
        </div>

        <button
          className="start-interview-btn"
          onClick={handleStart}
        >
          Start Interview <span>→</span>
        </button>
      </div>

    </main>
  </div>
);
}

export default InterviewSetup;