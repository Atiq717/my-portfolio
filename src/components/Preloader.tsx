import React from 'react';
import './css/Preloader.css';
import logoRed from '../../public/image/logo-red.png';

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="ball">
        <img src={logoRed} alt="Loading..." />
      </div>
    </div>
  );
};

export default Preloader;
