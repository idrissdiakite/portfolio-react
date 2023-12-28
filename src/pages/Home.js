import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Content from "../components/Home";
import PageTransition from "../utils/Transitions/transition";


const Home = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit')

    if (!isFirstVisit) {
      setTimeout(() => {
        setLoader(false)
        localStorage.setItem('isFirstVisit', 'false')
      }, 2500)
    } else { setLoader(false) }
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <PageTransition className="home">
      <Content />
    </PageTransition>
  )
}

export default Home;
