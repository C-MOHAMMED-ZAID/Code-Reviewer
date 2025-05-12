import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">Code Reviewer</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/app">App</Link></li>
        </ul>
      </nav>
      <header className="hero">
        <h1>Welcome to Code Reviewer</h1>
        <p>Automate your code reviews with AI-powered insights.</p>
        <Link to="/app" className="btn">Get Started</Link>
      </header>
      <section className="features">
        <h2>Why Choose Code Reviewer?</h2>
        <div className="feature feature1">
          <h3>Automated Recommendations</h3>
          <p>Get instant feedback on your code with AI-powered recommendations.</p>
        </div>
        <div className="feature feature2">
          <h3>Code Improvements</h3>
          <p>Identify areas for improvement and optimize your code for better performance.</p>
        </div>
        <div className="feature feature3">
          <h3>Enhanced Collaboration</h3>
          <p>Collaborate with your team more effectively with detailed code reviews.</p>
        </div>
      </section>
      <section className="advantages">
        <h2>Advantages of Using Code Reviewer</h2>
        <div className="advantage advantage1">
          <h3>Save Time</h3>
          <p>Reduce the time spent on manual code reviews and focus on more important tasks.</p>
        </div>
        <div className="advantage advantage2">
          <h3>Improve Code Quality</h3>
          <p>Ensure your code meets the highest standards with automated checks and suggestions.</p>
        </div>
        <div className="advantage advantage3">
          <h3>Boost Productivity</h3>
          <p>Increase your team's productivity by streamlining the code review process.</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Code Reviewer. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;