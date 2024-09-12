import React from "react";
import Title from "../Title";
import Details from "./details";
import "./style.scss";

const Contact = () => {
  return (
    <>
      <Title className="contact__title">Contact</Title>
      <div className="contact__suptitle">
        <p>À la recherche d'un nouveau challenge.</p>
        <p>Ouvert aux propositions - développeur front-end.</p>
      </div>
      <Details />
    </>
  )
}

export default Contact;
