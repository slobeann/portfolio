import React from "react"

function HeaderContainer({ children }) {
  return (
    <header className="px-5 sm:px-12 md:px-28 lg:px-32 xl:px-36 relative z-30 bg-white drop-shadow--header">
      {children}
    </header>
  )
}

export default HeaderContainer
