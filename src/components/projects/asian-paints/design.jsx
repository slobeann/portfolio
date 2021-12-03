import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../../layout"

function design() {
  return (
    <div className="bg-primary-light">
      <Container>
        <h3 className="mr-auto font-body">Design</h3>
        <p className="p3 section__intro mb-10">
          We had to create the UI to be in line with the Beautiful Homes’ design
          system, while finding ways to make it stand out as an e-commerce
          experience.
        </p>
        <div className="mb-8">
          <StaticImage
            alt="Fonts"
            src="../../../images/projects/asian-paints/design-1.png"
          />
          <p className="text-center">Typrography and Colours</p>
        </div>
        <div className="">
          <StaticImage
            alt="Icons"
            src="../../../images/projects/asian-paints/design-2.png"
          />
          <p className="text-center">Typrography and Colours</p>
        </div>
      </Container>
    </div>
  )
}

export default design
