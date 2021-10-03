import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import MenuManager from "../../components/Menu/MenuManager";
import ParticleBackground from "../../Particles/ParticleBackground";

import "./style.scss";

const Home = () => {
  return (
    <MenuManager>
      <Header />
      <section className="homepage">
          <ParticleBackground />
        <h1>
          Idriss <br />
          Diakite
        </h1>
        <Button />
      </section>
    </MenuManager>
  );
};

export default Home;
