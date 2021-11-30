import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../../layout"
import Project from "./project"

const proje = [
  {
    title: "Asian Paints",
    description:
      "Designing an e-commerce portal under Asian Paints’ Beautiful Homes Service. ",
  },
  {
    title: "ARC Foundation",
    description:
      "Rebranding and redesigning for an Indian non - profit with goals of building an aware, active, and responsible citizenry.",
  },
  {
    title: "The Sock",
    description:
      "Enriching information analytics for retail spaces with an occupancy detection system using non intrusive sensors.",
  },
]

function projects() {
  return (
    <Container>
      <Project
        number="01"
        image={
          <StaticImage src="../../../images/projects/asian-paints/hero.png" />
        }
        title="Asian Paints"
        description="Designing an e-commerce portal under Asian Paints' Beautiful Homes Service."
        tags={["UX Audit"]}
      />

      <Project
        number="02"
        image={
          <StaticImage src="../../../images/projects/arc-foundation/hero.png" />
        }
        title="ARC Foundation"
        description="Rebranding and redesigning for an Indian non - profit with goals of building an aware, active, and responsible citizenry."
        tags={["UX Design", "Branding"]}
      />

      <Project
        number="03"
        image={
          <StaticImage src="../../../images/projects/arc-foundation/hero.png" />
        }
        title="The Sock"
        description="Enriching information analytics for retail spaces with an occupancy detection system using non intrusive sensors."
        tags={["UX Design", "Hardware Design", "Machine Learning"]}
      />
    </Container>
  )
}

export default projects
