import React from "react"

function Container({ children, lessPadding, className }) {
  const py = lessPadding
    ? "py-4 md:py-6 lg:py-8"
    : "py-12 md:py-14 lg:py-16 xl:py-18"
  return (
    <div
      className={`${py} px-5 sm:px-12 md:px-28 lg:px-32 xl:px-36 ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
