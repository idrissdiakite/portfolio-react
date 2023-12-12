import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
import Content from "../components/Home";
// import Cursor from "../../components/Cursor";


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
    <motion.section
      className="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      {/* <Cursor /> */}
      <Content />
    </motion.section>
  )
}

export default Home;
