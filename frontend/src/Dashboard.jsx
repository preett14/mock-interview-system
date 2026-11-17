import React from "react";
import "./Dashboard.css";

function Dashboard ({ onStartNewInterview}) {
const categories = [
{ icon: "💼", name: "HR Interview", desc: "Practice common HR questions", level: "Beginner Friendly" },
{ icon: "☕", name: "Java Development", desc: "Core Java & Advanced Java", level: "Technical" },
{ icon: "⚛️", name: "MERN Stack", desc: "MongoDB, Express, React & Node", level: "Technical" },
{ icon: "🧠", name: "Data Structures", desc: "DSA & Problem Solving", level: "Technical" },
{ icon: "📊", name: "Data Analyst", desc: "Excel, SQL, Power BI & Python", level: "Professional" },
{ icon: "💻", name: "General Technical", desc: "Computer Science Fundamentals", level: "Technical" },
];

const stats = [
{ icon: "🎯", title: "Total Interviews", value: "00", change: "Start your first interview" },
{ icon: "📈", title: "Average Score", value: "0%", change: "Your performance overview" },
{ icon: "⏱️", title: "Practice Time", value: "0h", change: "Time spent learning" },
];

return (
<div className="dashboard-container">

  {/* Sidebar */}
  <aside className="sidebar">

    <div className="dashboard-logo">
      <span className="dashboard-logo-icon">✦</span>
      Vox<span>Prep</span>
      <small>AI</small>
    </div>

    <div className="sidebar-label">MAIN MENU</div>

    <nav className="sidebar-menu">
      <a href="#overview" className="menu-item active">
        <span>▦</span> Dashboard
      </a>

      <a href="#categories" className="menu-item">
        <span>◈</span> Practice Interview
      </a>

      <a href="#history" className="menu-item">
        <span>◷</span> Interview History
      </a>

      <a href="#performance" className="menu-item">
        <span>▤</span> My Performance
      </a>
    </nav>

    <div className="sidebar-label resources-label">PREFERENCES</div>

    <nav className="sidebar-menu">
      <a href="#profile" className="menu-item">
        <span>♙</span> My Profile
      </a>

      <a href="#settings" className="menu-item">
        <span>⚙</span> Settings
      </a>
    </nav>

    <div className="sidebar-bottom">
      <div className="help-card">
        <div className="help-icon">✦</div>
        <h4>Need Help?</h4>
        <p>We're here to help you prepare better.</p>
        <button>Contact Support ↗</button>
      </div>

      <button className="logout-button">
        <span>⇥</span> Log Out
      </button>
    </div>

  </aside>

  {/* Main Dashboard */}
  <main className="dashboard-main">

    {/* Header */}
    <header className="dashboard-header">
      <div>
        <p className="header-date">YOUR PERSONAL INTERVIEW SPACE</p>
        <h2>Dashboard <span>.</span></h2>
      </div>

      <div className="header-actions">
        <button className="notification-button">♧</button>

        <div className="user-profile">
          <div className="user-avatar">U</div>
          <div>
            <h4>User</h4>
            <p>Free Account</p>
          </div>
        </div>
      </div>
    </header>

    {/* Welcome Banner */}
    <section className="welcome-banner" id="overview">
      <div className="welcome-content">
        <div className="welcome-tag">
          <span>✦</span> AI INTERVIEW ASSISTANT
        </div>

        <h1>
          Welcome to your
          <br />
          next big <span>opportunity.</span>
        </h1>

        <p>
          Every great career starts with preparation.
          Practice with AI and build the confidence to succeed.
        </p>

        <button
          className="start-interview-button"
          onClick={onStartNewInterview}
        >
          Start New Interview <span>→</span>
        </button>
      </div>

      <div className="welcome-visual">
        <div className="visual-orbit orbit-one"></div>
        <div className="visual-orbit orbit-two"></div>
        <div className="visual-center">
          <span>✦</span>
          <small>AI</small>
        </div>
        <div className="floating-chip chip-one">AI Powered</div>
        <div className="floating-chip chip-two">Smart Feedback</div>
      </div>
    </section>

    {/* Stats */}
    <section className="stats-grid" id="performance">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-top">
            <div className="stat-icon">{stat.icon}</div>
            <span className="stat-arrow">↗</span>
          </div>

          <h3>{stat.value}</h3>
          <h4>{stat.title}</h4>
          <p>{stat.change}</p>
        </div>
      ))}
    </section>

    {/* Categories */}
    <section className="categories-section" id="categories">
      <div className="section-heading">
        <div>
          <p className="section-subtitle">CHOOSE YOUR PATH</p>
          <h2>Explore Interview Categories</h2>
        </div>

        <span className="category-count">06 CATEGORIES</span>
      </div>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-top">
              <div className="category-icon">{category.icon}</div>
              <span className="category-arrow">↗</span>
            </div>

            <h3>{category.name}</h3>
            <p>{category.desc}</p>

            <div className="category-bottom">
              <span>{category.level}</span>
              <span className="practice-link">Practice →</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Recent Interviews */}
    <section className="recent-section" id="history">
      <div className="section-heading">
        <div>
          <p className="section-subtitle">YOUR ACTIVITY</p>
          <h2>Recent Interviews</h2>
        </div>
        <button className="view-all-button">View All →</button>
      </div>

      <div className="empty-history">
        <div className="empty-icon">◷</div>
        <h3>Your journey starts here!</h3>
        <p>You haven't completed any interviews yet. Start your first practice session today.</p>
      </div>
    </section>

    <footer className="dashboard-footer">
      <p>© 2026 VoxPrep AI. Empowering your interview journey.</p>
      <p>Built with <span>✦</span> for your success.</p>
    </footer>

  </main>
</div>

);
}

export default Dashboard;