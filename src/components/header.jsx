import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { HeaderContainer } from "../components/layout"
import { Hamburger } from "../elements"
import { motion, AnimatePresence } from "framer-motion"

function NavItem({ children, to, target }) {
  return (
    <Link
      to={to}
      target={target || "_self"}
      className="nav-link px-1 relative border-b last:border-0 border-gray-light border-opacity-60 md:border-0"
      activeClassName="active-link"
    >
      <li className="text-black py-4 md:py-1 md:p-0 md:mb-0">{children}</li>
    </Link>
  )
}

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const handleHamburgerClick = () => {
    setMobileNavOpen(value => !value)
  }
  useEffect(() => {
    if (mobileNavOpen) {
      document.querySelector("body").classList.add("freeze")
    } else {
      document.querySelector("body").classList.remove("freeze")
    }
  }, [mobileNavOpen])
  return (
    <>
      <HeaderContainer>
        <div
          className="flex relative items-center drop-shadow-xl
          h-18 md:h-20 justify-between py-5"
        >
          <Link to="/" aria-label="Salonee Gupta">
            <StaticImage
              alt="Salonee Gupta"
              src="../images/logo.png"
              placeholder="tracedSVG"
              className="h-10 w-28 md:h-12 md:w-32"
              objectFit="contain"
              objectPosition="left center"
            />
          </Link>
          <Hamburger
            onClick={handleHamburgerClick}
            className="block md:hidden"
          />

          <nav className="hidden md:block">
            <ul className="flex md:space-x-10 md:space-x-12">
              <NavItem to="/#projects">Work</NavItem>
              <NavItem to="/about">About</NavItem>
            </ul>
          </nav>
          <ul className="hidden md:flex">
            <NavItem
              to="https://static1.squarespace.com/static/5f216d5cec92895c5dd59ff2/t/60b089dfe7735e462df61766/1622182367490/resume.pdf"
              target="_blank"
            >
              Resume
            </NavItem>
          </ul>
        </div>
      </HeaderContainer>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.nav
            style={{ transformOrigin: "top center" }}
            initial={{
              scaleY: 0.2,
              opacity: 0.4,
            }}
            animate={{
              scaleY: 1,
              opacity: 1,
              transition: {
                damping: 14,
                stiffness: 120,
              },
            }}
            exit={{
              scaleY: 0.3,
              opacity: 0,
              transition: {
                damping: 20,
                stiffness: 200,
              },
            }}
            className="mobile-nav fixed z-20 top-16 left-0 w-full bg-white
            border-t border-b border-gray drop-shadow-xl
            px-10 py-8 md:p-0 drop-shadow-2xl md:hidden"
          >
            <ul className="flex flex-col md:space-x-10 md:space-x-12">
              <NavItem to="/#projects">Work</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem
                to="https://static1.squarespace.com/static/5f216d5cec92895c5dd59ff2/t/60b089dfe7735e462df61766/1622182367490/resume.pdf"
                target="_blank"
              >
                Resume
              </NavItem>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
