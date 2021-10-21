import React from "react";

import "./menu-item.styles.scss";

export const Menu = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">{`=> Buy Now`}</span>
    </div>
  </div>
);
