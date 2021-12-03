import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../../layout"

function hero() {
  return (
    <Container>
      <div className="-my-6 md:-my-8 lg:-my-10">
        <StaticImage
          className="w-full"
          alt="Asian Paints"
          placeholder="BLURRED"
          src="../../../images/projects/asian-paints/hero.jpg"
        />
        <div className="-mt-5 md:-mt-7 relative z-20">
          <h2>Asian Paints</h2>
          <p className="p2">
            Designing an e-commerce portal under Asian Paints’ Beautiful Homes
            Service.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default hero
