import React from "react";

import "./homepage.styles.scss";

import Directory from "../../Components/directory-menu/directory-menu.component.jsx";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1> Hello World </h1>
      <Directory />
    </div>
  );
};

export default HomePage;
