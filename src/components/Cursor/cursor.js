import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import "./style.scss"


export default function Cursor() {
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = e => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2)
    mouse.y.set(clientY - cursorSize / 2)
  }

  const [isMobile, setIsMobile] = useState(true)

  useEffect( () => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200)
    }

    handleResize()

    window.addEventListener("mousemove", manageMouseMove)

    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    }
  })

  if (isMobile) {
    return null
  }

  return (
    <motion.div 
      className="cursor" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      >
      </motion.div>
  )
}