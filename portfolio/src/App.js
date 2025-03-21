import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Sushmitha T</h1>
        <p>Aspiring Software Developer</p>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          Seeking a secure, responsive, and challenging position at an
          organization where I can further improve my technical and personal
          skills while making a significant contribution.
        </p>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li>Programming Languages: Java, C, Python</li>
          <li>Web Development: HTML, CSS, JavaScript, React.js</li>
          <li>Database Management: MySQL, MongoDB</li>
          <li>Tools & Platforms: Git, GitHub, VS Code, Eclipse</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>AI-based Patient Readmission Prediction (2024)</strong>
            <p>
              AI models predict the likelihood of readmission, allowing for
              targeted interventions such as follow-up care.
            </p>
          </li>
          <li>
            <strong>Exercise Recommendation (2024)</strong>
            <p>
              This project suggests exercises with GIFs based on the selected
              body part and target.
            </p>
          </li>
          <li>
            <strong>CEC Facecheck (2023)</strong>
            <p>
              Developed for face detection and attendance tracking with real-time
              database integration.
            </p>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>B.E - Canara Engineering College (CSE) (2021-2025)</strong>
            <p>CGPA: 8.69 (upto 6th sem)</p>
          </li>
          <li>
            <strong>PUC - Sri Ramkunjeshwara PU College (2019-2021)</strong>
            <p>Percentage: 95.17%</p>
          </li>
          <li>
            <strong>SSLC - Jnanodaya Bethany High School (2015-2019)</strong>
            <p>Percentage: 89.92%</p>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Certifications</h2>
        <ul>
          <li>Salesforce training by ExcelR</li>
          <li>RDBMS programming test (IIT Bombay, ICT)</li>
          <li>Python programming test (IIT Bombay, ICT)</li>
          <li>Completion certificates for HTML, CSS, and Java (Coursera)</li>
        </ul>
      </section>

      <footer className="footer">
        <h2>Contact</h2>
        <p>Phone: +91 7204263899</p>
        <p>Email: sushmithat963@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/sushmitha-t-3ba7b1228"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedin className="icon" /> LinkedIn
        </a>
      </footer>
    </div>
  );
};

export default App;
