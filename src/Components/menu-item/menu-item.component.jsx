import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const Menu = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(Menu);
