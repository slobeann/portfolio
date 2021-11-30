import React from "react"
import { Container } from "./layout"

function footer() {
  return (
    <Container className="">
      <div className="-my-3 lg:-my-6 border-t border-gray-light pt-6 px-6 md:px-6 lg:pt-10">
        <p className="p2 font-head text-center text-black flex flex-col">
          <span>Ready to have me join your team? Have questions?</span>
          <a
            href="mailto:saloneeg@andrew.cmu.edu"
            target="_blank"
            className="primary-stripe mx-auto"
          >
            Feel free to reach out at anytime!
          </a>
        </p>
      </div>
    </Container>
  )
}

export default footer
