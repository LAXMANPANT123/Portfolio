import React from 'react';
import './About.css';

const skills = [
  { name: 'React / Next.js', level: 92 },
  { name: 'Node.js / Express', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Sql/ MongoDB', level: 82 },
  { name: 'Docker', level: 75 },
  { name: 'UI/UX Design', level: 78 },
  { name: 'GraphQL', level: 72 },
];

const interests = ['🎸 Playing Guitar', '📚 Reading Sci-Fi', '🏔️ Hiking', '☕ Specialty Coffee', '🎮 Game Dev', '🌍 Traveling'];

const About = () => {
  return (
    <div className="page-wrapper">
      <div className="about-page">
        <div className="about-header">
          <p className="section-label">About Me</p>
          <h1 className="section-title">The person behind <br /><span className="highlight">the keyboard</span></h1>
          <p className="section-subtitle">
            I'm a student in Jain university with a passion for building beautiful, 
            performant digital experiences. I believe great software is equal parts engineering and art.Currenly persuing my undeergraduation in computer science and engennering.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <div className="about-photo-wrapper">
              <div className="about-photo">
                <div className="photo-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>Laxman Pant</span>
                </div>
              </div>
              <div className="photo-badge">
                <span className="badge-dot-green" />
                <span>Open to opportunities</span>
              </div>
            </div>

            <div className="about-quick-info">
              {[
                { icon: '📍', label: 'Location', value: 'jain university, Bengaluru' },
                { icon: '🎓', label: 'Undergraduate Degree', value: 'Computer Science and engiineering' },
                { icon: '🌐', label: 'Languages', value: 'English, Nepali' },
              ].map(item => (
                <div key={item.label} className="info-row">
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="about-story">
              <h3 className="about-section-heading">My Story</h3>
              <p>
                Started learing coding at 18, building small games and websites out of pure curiosity.
                That curiosity never left. Today I build full-stack web applications
                , and still learning new technologies.
              </p>
              
            </div>

            <div className="skills-section">
              <h3 className="about-section-heading">Technical Skills</h3>
              <div className="skills-list">
                {skills.map((skill, i) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="interests-section">
              <h3 className="about-section-heading">Beyond the Screen</h3>
              <div className="interests-grid">
                {interests.map(item => (
                  <span key={item} className="interest-tag">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
