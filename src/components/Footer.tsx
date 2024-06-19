import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white text-right py-3 pr-4 pl-3">
      <p>2024 By Mohammed Khan | All Rights Reserved</p>
      <a href="#">
        <i style={{ fontSize: '24px' }} className="fas fa-arrow-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
