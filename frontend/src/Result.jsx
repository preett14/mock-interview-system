import "./Result.css";

function Result({ onDashboard, answers = [] }) {
  const totalQuestions = answers.length;

const totalScore = answers.reduce((score, item) => {
  const answerText = (item.answer || "").toLowerCase().trim();
  const question = (item.question || "").toLowerCase();

  let keywords = [];

  if (question.includes("tell me about yourself")) {
    keywords = [
      ["name", "myself", "i am"],
      ["education", "degree", "college", "student"],
      ["skill", "skills", "java", "mern"],
      ["project", "experience", "training"],
      ["goal", "career", "learn"]
    ];
  } 
  else if (question.includes("strengths")) {
    keywords = [
      ["strength", "strong"],
      ["weakness", "weak"],
      ["improve", "improvement"],
      ["teamwork", "hardworking", "communication"],
      ["learn", "practice", "develop"]
    ];
  } 
  else if (question.includes("why should we hire")) {
    keywords = [
      ["skills", "knowledge"],
      ["company", "organization"],
      ["contribute", "help"],
      ["learn", "grow"],
      ["hardworking", "dedicated", "teamwork"]
    ];
  }

  let marks = 0;

  keywords.forEach((group) => {
    if (group.some((word) => answerText.includes(word))) {
      marks += 2;
    }
  });

  return score + marks;
}, 0);

const finalScore = totalQuestions > 0
  ? Math.round((totalScore / (totalQuestions * 10)) * 100)
  : 0;
  const rating =
  finalScore >= 80 ? "Excellent" :
  finalScore >= 60 ? "Good" :
  finalScore >= 40 ? "Average" :
  "Needs Improvement";
  const strengths = [];

const improvements = [];

if (finalScore >= 60) {
  strengths.push("Good answer length and detail");
} else {
  improvements.push("Try writing more detailed answers");
}

if (finalScore >= 80) {
  strengths.push("Well-developed responses");
} else {
  improvements.push("Add relevant examples to your answers");
}

if (finalScore < 40) {
  improvements.push("Practice explaining your thoughts clearly");
}
return (
<div className="result-page">

  <header className="result-header">
    <h2 className="logo">
      ✦ Vox<span>Prep</span> AI
    </h2>

    <button className="dashboard-button" onClick={onDashboard}>
      Dashboard
    </button>
  </header>

  <main className="result-container">

    <div className="result-heading">
      <div className="success-icon">✓</div>
      <h1>Interview Completed!</h1>
      <p>Great job! Here is your interview performance report.</p>
    </div>

    <div className="score-card">
      <p>YOUR OVERALL SCORE</p>

      <div className="score-circle">
        <span>{finalScore}</span>
        <small>/100</small>
      </div>

      <h2>{rating}Performance!</h2>
      <p>You are doing well. Keep practicing to improve further.</p>
    </div>

    <div className="performance-grid">

      <div className="performance-card">
        <span>📋</span>
        <h3>{totalQuestions}</h3>
        <p>Total Questions</p>
      </div>

      <div className="performance-card">
        <span>⭐</span>
        <h3>{finalScore}%</h3>
        <p>Performance Score</p>
      </div>

      <div className="performance-card">
        <span>🎯</span>
        <h3>{rating}</h3>
        <p>Overall Rating</p>
      </div>

    </div>

    <div className="feedback-grid">

      <div className="feedback-card strengths">
        <h2>✓ Your Strengths</h2>
        <ul>
          {strengths.map((item, index) => (
  <li key={index}>{item}</li>
))}
        </ul>
      </div>

      <div className="feedback-card weaknesses">
        <h2>↗ Areas to Improve</h2>
        <ul>
          {improvements.map((item, index) => (
  <li key={index}>{item}</li>
))}
        </ul>
      </div>

    </div>

    <div className="answers-section">
  <h2>📝 Your Interview Answers</h2>

  {answers.length > 0 ? (
    answers.map((item, index) => (
      <div className="answer-result-card" key={index}>
        <h3>Question {index + 1}</h3>
        <p><strong>Q:</strong> {item.question}</p>
        <p><strong>Your Answer:</strong></p>
        <p>{item.answer || "No answer provided."}</p>
      </div>
    ))
  ) : (
    <p>No answers available.</p>
  )}
</div>

    <div className="ai-feedback">
      <h2>✦ AI Feedback</h2>
      <p>
        You have completed your interview successfully.
        Your answers show good potential. Focus on improving
        your answer structure and providing relevant examples.
        Keep practicing to achieve better results.
      </p>
    </div>

    <button className="retry-button" onClick={onDashboard}>
      Back to Dashboard →
    </button>

  </main>
</div>

);
}

export default Result;