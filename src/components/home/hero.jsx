import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "../layout"

const actions = ["writes", "codes", "models"]
function Hero() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(value => value + 1)
      return () => clearInterval(intervalId)
    }, [3000])
  }, [])
  return (
    <section className="home-hero-section">
      <Container className="h-full">
        <div className="h-full flex flex-col justify-center">
          <div className="lg:-mb-32">
            <h1>
              <span className="text-gray-dark">Hi, I’m </span>
              <span className="primary-stripe">Salonee.</span>
            </h1>
            <p className="p0">
              I’m a <span className="font-semibold">UX designer</span> who&nbsp;
              <span
                style={{
                  top: "0.13em",
                  height: "1em",
                  width: "3.5em",
                }}
                className="relative inline-block secondary-stripe overflow-hidden"
              >
                <AnimatePresence>
                  <motion.span
                    className="leading-none"
                    style={{ position: "absolute" }}
                    initial={{
                      y: "1em",
                    }}
                    animate={{
                      y: 0,
                    }}
                    exit={{
                      y: "-1em",
                    }}
                    transition={{
                      stiffness: 80,
                      damping: 100,
                    }}
                    key={count}
                  >
                    {actions[count % actions.length]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
          </div>
        </div>
        <div className="-mt-12" />
      </Container>
    </section>
  )
}

export default Hero
