import React from 'react';
import './style.css';

const HeaderBar = ({ title, subtitle }) => (
  <header className="header__container">
    <div className="header__title">
      <div className="header__banner">
        {title}
        <div className="header__subtitle">
          {subtitle}
        </div>
      </div>
    </div>
  </header>
);

export default HeaderBar;