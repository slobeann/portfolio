import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../../layout"

function design() {
  return (
    <>
      <div className="bg-primary-light">
        <Container>
          <h3 className="mr-auto font-body">Development & UI</h3>
          <p className="p3 text-black-light">
            I wrote out a technical document with all the functional
            specifications the developers would need to build this website. The
            AP team was performing user testing in parallel with website
            development. During this time, I also worked closely with them to
            tweak designs on the basis of the results from the user testing.
            I've added a few key screens but the website is live on this link.
          </p>
        </Container>
      </div>
      <div className="-mt-4 md:-mt-7">
        <Container>
          <div className="flex space-x-4 lg:space-x-8">
            <StaticImage
              src="../../../images/projects/asian-paints/ui-1.png"
              alt="UI screen 1"
              className="w-1/2"
            />
            <StaticImage
              src="../../../images/projects/asian-paints/ui-2.png"
              alt="UI screen 2"
              className="w-1/2"
            />
          </div>
        </Container>
      </div>
    </>
  )
}

export default design
