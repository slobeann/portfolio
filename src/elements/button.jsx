import React from "react"

function Button(props) {
  return (
    <props.as
      {...props}
      className="button px-5 py-2 rounded text-white bg-primary
      hover:bg-primary-dark focus:bg-primary-dark drop-shadow-button"
    />
  )
}

export default Button

Button.defaultProps = {
  as: "button",
}
