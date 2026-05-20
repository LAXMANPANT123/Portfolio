import React, { useEffect, useState } from 'react';
import './Home.css';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Open Source Contributor', 'Problem Solver'];

const Home = ({ setActivePage }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const stats = [
    { value: '5+', label: 'Projects Built' },
    { value: '5+', label: 'Happy Clients' },
    { value: '8+', label: 'Technologies' },
  ];

  const techStack = ['React', 'Node.js', 'Express' , 'PowerBI','TypeScript', 'Python', 'MongoDB', 'SQL', 'Docker'];

  return (
    <div className={`home-page ${visible ? 'visible' : ''}`}>
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for work
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Laxman Pant</span>
          <br />
          <span className="hero-role-line">
            I'm a <span className="hero-typewriter">{displayText}<span className="cursor">|</span></span>
          </span>
        </h1>

        <p className="hero-description">
          I craft exceptional digital experiences with clean code and thoughtful design.
          Passionate about building products that live at the intersection of technology and beauty.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => setActivePage('Projects')}>
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-outline" onClick={() => setActivePage('Contact')}>
            Let's Talk
          </button>
        </div>

        <div className="tech-stack">
          <span className="tech-label">Tech Stack</span>
          <div className="tech-pills">
            {techStack.map((tech, i) => (
              <span key={tech} className="tech-pill" style={{ animationDelay: `${i * 0.05}s` }}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((stat, i) => (
          <div key={stat.label} className="stat-card" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
};

export default Home;
