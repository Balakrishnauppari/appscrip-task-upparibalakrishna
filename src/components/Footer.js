import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-links">
        <a href="#contact">Contact Us</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Appscrip Task. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;