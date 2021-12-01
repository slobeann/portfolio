import React, { useState } from "react"
import { Container } from "../layout"

function project() {
  return (
    <section className="">
      <Container className="flex flex-col lg:flex-row">
        <h3 className="flex flex-wrap lg:flex-col lg:w-4/12">
          <span className="">
            The <span className="h-stripe h3 -mb-1 inline-block">Latest</span>{" "}
            &amp;&nbsp;
          </span>
          <span>
            <span className="h-stripe -mb-1 inline-block">Greatest</span>
          </span>
        </h3>

        <div className="flex flex-col md:flex-row md:w-full lg:w-8/12">
          <div className="flex flex-col lg:ml-10 lg:w-1/2">
            <div className="flex flex-col mb-4 lg:h-32">
              <span className="p3 mb-1">BOOK</span>
              <span className="text-black-light mb-2">Untamed</span>
              <span className="text-black-light">I Thought It Was Just Me</span>
            </div>
            <div className="flex flex-col mb-4 md:mb-0">
              <span className="p3 mb-1">LEARNING</span>
              <span className="text-black-light">
                Trying to not fall off while slacklining, mastering the crow
                pose
              </span>
            </div>
          </div>
          <div className="flex flex-col md:ml-10 lg:w-1/2">
            <div className="flex flex-col mb-4 lg:h-32">
              <span className="p3 mb-1">ADVENTURE</span>
              <span className="text-black-light">
                I backpacked with my friend across Goa for a month. We ate, read
                and did yoga without a worry in the world.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="OBSESSION">LEARNING</span>
              <span className="text-black-light">
                Watching New Girl on Netflix, making the perfect sangria
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default project
