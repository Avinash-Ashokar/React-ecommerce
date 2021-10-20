import React from "react";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1> Hello World </h1>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">HAT</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Sneakers</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Jackets</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Women</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Men</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
