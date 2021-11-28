import React from "react"

function HeaderContainer({ children }) {
  return (
    <header className="px-5 sm:px-7 md:px-10 lg:px-14 xl:px-16 relative z-30 bg-white drop-shadow--header">
      {children}
    </header>
  )
}

export default HeaderContainer
