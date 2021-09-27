import React from "react";
import Menu from "../Menu";

import "./style.scss";

const Header = () => {
  return (
    <>
      <div className="header-wrap">
        <p className="description"> Développeur front-end</p>
        <Menu />
      </div>
    </>
  );
};

export default Header;
