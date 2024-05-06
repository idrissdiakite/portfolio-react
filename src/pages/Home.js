import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Content from "../components/Home";
import PageTransition from "../utils/Transitions/transition";


const Home = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const menu = document.querySelector('.menu__btn')
    const isFirstVisit = localStorage.getItem('isFirstVisit')

    menu.style.opacity = 0

    if (!isFirstVisit) {
      setTimeout(() => {
        setLoader(false)
        menu.style.opacity = 1
        localStorage.setItem('isFirstVisit', 'false')
      }, 2500)
    } else { 
      setLoader(false) 
      menu.style.opacity = 1
    }
  }, [])

  return loader ? (
    <Loader />
  ) : (
    <PageTransition className="home">
      <Content />
    </PageTransition>
  )
}

export default Home;
