import React, { useState } from "react"
import { Container } from "../layout"

function project() {
  return (
    <section className="bg-primary">
      <Container>
        <p className="p1 text-black-light">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.”
        </p>
        <div className="flex flex-col mt-5">
          <span className="p4 text-black-light font-semibold">
            Sharan Grandigae, Former Boss
          </span>
          <span className="p4 text-black">Redd Experience Design</span>
        </div>
      </Container>
    </section>
  )
}

export default project
