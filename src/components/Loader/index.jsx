import React from "react";
import LoaderGif from "./../../assets/loader/loader.gif";

import "./style.scss";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderGif} alt="loader" />
    </div>
  );
};

export default Loader;
