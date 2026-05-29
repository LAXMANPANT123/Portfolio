import React, { useState } from 'react';
import './Experience.css';

const education = [
   {    degree: '10 th Grade',
    school: 'Akshar Academy, Kathmandu, Nepal',
    period: '2019 - 2020',
    gpa: '98.7%',
    highlights: ['I was a part of Basketball team of my School', 'Focused on Physics, Chemistry, and Mathematics', 'I was in the top 5 student of my class'],
  },
  {    degree: '12th Science',
    school: 'Prasadi Academy, Kathmandu, Nepal',
    period: '2021 - 2023',
    gpa: '90%',
    highlights: ['Completed Class 12 with Science stream', 'Focused on Physics, Chemistry, and Mathematics', 'I was one of the best students of my class'],
  },
  {    degree: 'B-Tech in Computer Science and Engineering',
    school: 'Jain University',
    period: '2023 - 2027',
    gpa: '9/10',
    highlights: ['I was a part of the football team of my college', 'Senior project: E-commerse project', 'Published an project for my semester project'],
  },
];

const certifications = [
  { name: 'MongoDB Certified Developer Associate', issuer: 'MongoDB', year: '2024', color: '#47a248' },
  { name: 'Google Cloud Professional', issuer: 'Google Cloud', year: '2022', color: '#34d399' },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <div className="page-wrapper">
      <div className="experience-page">
        <div className="exp-header">
          <p className="section-label">Career</p>
          <h1 className="section-title">My <span className="highlight">Journey</span></h1>
          <p className="section-subtitle">
            A track record of building meaningful products at companies pushing the boundaries of the web.
          </p>
        </div>

        <div className="exp-tabs">
          {['education', 'certifications'].map(tab => (
            <button
              key={tab}
              className={`exp-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'education' && (
          <div className="education-section">
            {education.map(edu => (
              <div key={edu.degree} className="edu-card">
                <div className="edu-icon">🎓</div>
                <div className="edu-content">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-meta">
                    <span className="edu-school">{edu.school}</span>
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-gpa">GPA: {edu.gpa}</span>
                  </div>
                  <ul className="edu-highlights">
                    {edu.highlights.map((h, i) => (
                      <li key={i}><span className="achievement-dot" />{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="certs-grid">
            {certifications.map(cert => (
              <div key={cert.name} className="cert-card" style={{ '--cert-color': cert.color }}>
                <div className="cert-icon">🏆</div>
                <h4 className="cert-name">{cert.name}</h4>
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
