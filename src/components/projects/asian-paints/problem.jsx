import React, { useState } from "react"
import { Container } from "../../layout"

const items = [
  {
    title: "Low quality and/or irrelevant pictures",
    body: "Pixelated, dark, low quality pictures is not what users expect when looking to shop. Further they expect their purchase to look like the pictures they bought the product(s) off of.",
  },
  {
    title: "Confusing information architecture",
    body: "Users want to easily be able to find their way to the 'tweak wood armchairs' without getting lost amidst all the different types of furniture on the website.",
  },
  {
    title: "Unhelpful search",
    body: "Individuals looking to shop didn't sign up to be proficient in spelling mahogany. They also arrive with the expectation that the Search will be doing most of the work",
  },
  {
    title: "What goes with what?",
    body: "Convenience users want to be told what pairs well with that furniture, even if they choose to go a different route",
  },
  {
    title: "Inability to customise",
    body: "Users like having the ability to tweak furniture to fit their rooms perfectly.",
  },
  {
    title: "Finding the right support",
    body: "It is inconvenient to have to search for a specific FAQ. It's also preferred to have multiple ways to contact support staff.",
  },
  {
    title: "Transparency with shipping and returns",
    body: "Furniture can be an expensive investment. Users like to track their shipping and returns.",
  },
  {
    title: "Trusting quality",
    body: "Being unable to feel something before investing in it makes it very important to use other indicators to instil trust between the brand and it's consumer.",
  },
]

function project() {
  return (
    <div className="bg-primary-light">
      <Container>
        <h3 className="mr-auto font-body">Understanding the problem</h3>
        <p className="p3 pt-2 section__intro">
          We conducted think-aloud interviews to test the current website for
          usability. The insights gathered from the sessions:
        </p>
        <div className="flex flex-wrap mt-12">
          {items.map(item => {
            return (
              <div className="bg-white p-4 mb-12 project-details-card">
                <p className="p4 font-semibold text-black-light mb-7">
                  {item.title}
                </p>
                <p className="p4">{item.body}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default project
