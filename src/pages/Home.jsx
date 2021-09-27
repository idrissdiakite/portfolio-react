import React from "react";
import HomeButton from "../components/HomeButton";
import Header from "../components/Header";
import MenuManager from "../components/Menu/MenuManager";

const Home = () => {
  return (
    <MenuManager>
      <Header />
      <div className="home container">
        <h1>
          Idriss <br />
          Diakite
        </h1>
        <HomeButton />
      </div>
    </MenuManager>
  );
};

export default Home;
