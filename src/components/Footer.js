import React from 'react';
import './Footer.css';

const Footer = ({ setActivePage }) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo" onClick={() => setActivePage('Home')}>
          <span className="logo-bracket">&lt;</span>
          <span>Laxman</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">
          Designed & Built by Laxman Pant · {new Date().getFullYear()}
        </p>
        <p className="footer-note">Made with React & other technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
