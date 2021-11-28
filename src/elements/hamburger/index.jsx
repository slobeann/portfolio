import React from "react"
import "./style.css"

function Hamburger({ className, onClick }) {
  return (
    <div
      className={`hamburger-container flex flex-col space-y-1 w-7 h-6 relative ${className}`}
    >
      <input
        type="checkbox"
        onChange={onClick}
        className="checkbox opacity-0 w-full h-full absolute focus:outline-none focus:ring-2 focus:ring-purple-600 z-10"
        name="menu"
        aria-label="menu"
      />
      <div className="hamburger flex flex-col space-y-1 w-7 h-6">
        <div className="inline-block w-full h-1 bg-black transition rounded-xs top"></div>
        <div className="inline-block w-full h-1 bg-black transition rounded-xs middle"></div>
        <div className="inline-block transition rounded-xs bottom w-full h-1 bg-black"></div>
      </div>
    </div>
  )
}

export default Hamburger
