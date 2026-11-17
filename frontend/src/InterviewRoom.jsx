import { useState } from "react";
import "./InterviewRoom.css";

function InterviewRoom({ settings, onExit, onFinish }) {
const [answer, setAnswer] = useState("");

const questions = [
"Tell me about yourself.",
"What are your strengths and weaknesses?",
"Why should we hire you?"
];

const [currentQuestion, setCurrentQuestion] = useState(0);
const [allAnswers, setAllAnswers] = useState([]);

const handleNext = () => {
  const updatedAnswers = [
    ...allAnswers,
    {
      question: questions[currentQuestion],
      answer: answer
    }
  ];

  setAllAnswers(updatedAnswers);

  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    setAnswer("");
  } else {
    onFinish?.(updatedAnswers);
  }
};

return (
<div className="interview-room">
<header className="interview-header">
<h2 className="logo">
✦ Vox<span>Prep</span> AI
</h2>

    <button className="exit-button" onClick={onExit}>
      Exit Interview
    </button>
  </header>

  <main className="interview-content">
    <div className="interview-info">
      <span>{settings?.category || "HR Interview"}</span>
      <span>{settings?.difficulty || "Beginner"}</span>
      <span>{settings?.duration || "20 Minutes"}</span>
    </div>

    <div className="ai-interviewer">
      <div className="ai-avatar">✦</div>
      <h2>AI Interviewer</h2>
      <p>Your interview is in progress. Give your best!</p>
    </div>

    <div className="question-card">
      <p className="question-label">
        QUESTION {currentQuestion + 1} OF {questions.length}
      </p>

      <h2>{questions[currentQuestion]}</h2>
    </div>

    <div className="answer-card">
      <label>Your Answer</label>

      <textarea
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button
        className="next-question-button"
        onClick={handleNext}
      >
        {currentQuestion === questions.length - 1
          ? "Finish Interview"
          : "Next Question →"}
      </button>
    </div>
  </main>
</div>

);
}

export default InterviewRoom;