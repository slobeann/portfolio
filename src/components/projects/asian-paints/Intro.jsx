import React, { useState } from "react"
import { Container } from "../../layout"

function project() {
  return (
    <Container>
      <h3 className="mr-auto font-body">Introduction</h3>
      <div
        className="mb-24 last:mb-0 flex flex-col lg:flex-row space-y-8 md:space-y-0
        md:space-x-10 lg:space-x-14 xl:space-x-16"
      >
        <div className="md:w-1/2 flex flex-col">
          <p className="p3 pt-2">
            In the era of online shopping, the aim was so create a unique
            shopping experience in line with the{" "}
            <a
              href="https://www.asianpaints.com/"
              target="_blank"
              className="link"
            >
              Asian Paints
            </a>
            's design style and philosophy. This project was divided into 2
            phases, the first focusing on the MVP and the second refining and
            additional features.
          </p>
        </div>

        <div className="flex flex-col md:ml-10 md:w-1/2">
          <div className="flex flex-col mb-6">
            <span className="p3 mb-1">ROLE</span>
            <span className="">
              I contributed to a team of 5 members as a{" "}
              <span className="font-semibold text-black-light">
                UX Designer
              </span>{" "}
              and also as a{" "}
              <span className="font-semibold text-black-light">Team Lead</span>{" "}
              (January to March).{" "}
            </span>
          </div>
          <div className="flex flex-col mb-6">
            <span className="OBSESSION">DURATION</span>
            <span className="">September 2020 - March 2021 (7 months)</span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="OBSESSION">SKILLS</span>
            <span className="">
              Product Strategy, Wire-framing, Prototyping, User Flows, UI
              Design, Information Architecture, Interaction Design
            </span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default project
