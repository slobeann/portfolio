import React from "react"

function ImgAndContent({ image, children }) {
  return (
    <div className="flex flex-col md:flex-row mb-20 md:items-center content-with-img">
      {React.cloneElement(image, {
        className: "md:w-1/2 mb-5 md:mb-0 img",
      })}
      <div className="md:w-1/2 content">{children}</div>
    </div>
  )
}

export default ImgAndContent
