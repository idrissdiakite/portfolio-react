import React, {useState, useEffect} from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import MenuManager from "../../components/Menu/MenuManager";
import ParticleBackground from "../../Particles/ParticleBackground";

import "./style.scss";

const Home = () => {
  const [loader, setLoader] = useState(true);

    useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000)
  }, [])

  return loader ? (
    <Loader />
    ) : (
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
