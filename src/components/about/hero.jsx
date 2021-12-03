import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../layout"

function project() {
  return (
    <Container>
      <div className="mb-24 last:mb-0 flex flex-col lg:flex-row">
        <StaticImage
          src="../../images/profile.jpg"
          alt="Salonee Gupta"
          placeholder="blurred"
          className="md:w-1/2 lg:w-5/12 lg:mr-8 flex-shrink-0 mb-4 lg:mb-0"
        />
        <div className="self-center flex flex-col mr-auto">
          <p className="hidden lg:flex about-title p0 font-head relative lg:-left-32 mr-auto flex flex-col space-y-2">
            <span>It's often said that, to innovate the world</span>
            <span>you need to be dissatisfied with it in some way.</span>
          </p>
          <p className="lg:hidden p0 font-head relative lg:-left-32 mr-auto space-y-2">
            It's often said that, to innovate the world you need to be
            dissatisfied with it in some way.
          </p>
          <p1 className="p3 pt-2">
            It’s often said that, to innovate the world you need to be
            dissatisfied with it in some way. I’m grateful for my experiences,
            because I know I want to leave the world more inclusive than when I
            found it.
          </p1>
        </div>
      </div>
    </Container>
  )
}

export default project
