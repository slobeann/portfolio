import React from "react"
import { Container } from "../layout"

function project() {
  return (
    <Container>
      <div
        className="mb-24 last:mb-0 flex flex-col lg:flex-row space-y-8 md:space-y-0
        md:space-x-10 lg:space-x-14 xl:space-x-16"
      >
        <div className="flex flex-col">
          <h3 className="h-stripe mr-auto">What I do</h3>
          <p1 className="p3 pt-2">
            With a background in computer science, I worked as a UX Designer at{" "}
            <a href="https://redd.in/" target="_blank" className="link">
              Redd Experience Design
            </a>{" "}
            in Bangalore, India for a year. I am now pursuing a{" "}
            <a
              href="https://www.hcii.cmu.edu/academics/mhci"
              target="_blank"
              className="link"
            >
              Masters in Human Computer Interaction
            </a>{" "}
            from{" "}
            <a href="https://www.cmu.edu/" target="_blank" className="link">
              Carnegie Mellon University
            </a>{" "}
            starting fall 2021.
          </p1>
          <p className="p3 mt-4">
            When I'm not working towards creating thoughtful design, I spend my
            time writing, practising yoga and teaching debate. I also mentor
            students from my alma mater's Design Community. I love spicy ramen,
            white lilies and metaphors. I also give my plants names, and drink
            an unwarranted amount of tea.{" "}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default project
