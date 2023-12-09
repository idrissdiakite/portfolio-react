import React from "react";
// import Menu from "../Menu";

import "./style.scss";

// Composant réutilisé sur la homepage (apparait en bas à droite)
const Header = () => {
  return (
    <>
      <div className="header-wrap">
        <p className="description"> Développeur front-end</p>
        {/* <Menu /> */}
      </div>
    </>
  );
};

export default Header;
