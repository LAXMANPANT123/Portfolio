import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'Octanet',
    period: '2024 — Present',
    location: 'Remote',
    type: 'Internship',
    description: 'Supporting Octanet’s product team by building frontend features and improving user-facing collaboration workflows.',
    achievements: [
      'Developed reusable React components for Octanet’s dashboard and chat experience',
      'Optimized page load performance and helped reduce rendering time on key screens',
      'Worked closely with designers and engineers to ship new integration features',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'Git'],
    color: '#5e9fff',
  },
];

const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'UC Berkeley',
    period: '2017 — 2021',
    gpa: '3.8 / 4.0',
    highlights: ['Dean\'s List 4× consecutive years', 'Senior project: Distributed file system', 'Teaching Assistant for Data Structures'],
  },
];

const certifications = [
  { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023', color: '#f59e0b' },
  { name: 'Google Cloud Professional', issuer: 'Google Cloud', year: '2022', color: '#34d399' },
  { name: 'Certified Kubernetes Admin', issuer: 'CNCF', year: '2022', color: '#5e9fff' },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

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
          {['work', 'education', 'certifications'].map(tab => (
            <button
              key={tab}
              className={`exp-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'work' && (
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="timeline-item" style={{ '--exp-color': exp.color }}>
                <div className="timeline-dot" />
                {idx < experiences.length - 1 && <div className="timeline-line" />}
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div className="timeline-title-block">
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-row">
                        <span className="exp-company">{exp.company}</span>
                        <span className="exp-type-badge">{exp.type}</span>
                      </div>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-period">{exp.period}</span>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                  </div>
                  <p className="exp-description">{exp.description}</p>
                  <ul className="exp-achievements">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>
                        <span className="achievement-dot" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="exp-tech">
                    {exp.tech.map(t => <span key={t} className="exp-tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
