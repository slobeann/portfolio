import React, { useState } from "react"
import { Container } from "../../layout"

const mvpItems = [
  {
    title: "Searching for a product ",
    body: "A user could either use the search option to look for a specific product, the navigation menu or the homepage. This flow would involve searching, discovering, and finding a product.",
  },
  {
    title: "Adding products to a Wishlist",
    body: "On finding a product(s) the user likes, they may choose to add it to their Wishlist.",
  },
  {
    title: "Ordering a product",
    body: "On finding a product(s) the user likes, they may choose to add it to their cart or to buy it immediately. This flow would involve adding to cart, purchasing and tracking the order.",
  },
  {
    title: "Returning/ Exchanging a product ",
    body: "The user should be able to easily request an exchange or a return.",
  },
  {
    title: "Support",
    body: "The user should be able to request help and find relevant FAQs with ease.",
  },
]

const phaseItems = [
  {
    title: "Furniture Customization",
    body: "The user can customize parts of the different types of furniture to better fit the design of their home",
  },
  {
    title: "Shop by room/look",
    body: "The user can look for furniture on the basis of the room they are looking to furnish (living, bathroom, etc) or on the basis of a type of look (modern, traditional, etc)",
  },
  {
    title: "Premium Products",
    body: "The user can look for furniture on the basis of the room they are looking to furnish (living, bathroom, etc) or on the basis of a type of look (modern, traditional, etc)",
  },
]

function project() {
  return (
    <div className="">
      <Container>
        <h3 className="mr-auto font-body">Defining the product</h3>
        <p className="p3 pt-2 lg:w-10/12 xl:w-8/12 mb-12">
          We each did some market research on competitors to investigate similar
          websites currently in the market, and take inspiration from particular
          features that we liked about each brand. We combined that research
          with the insights from the think aloud sessions, to come up with the
          following key user stories:
        </p>
        <span className="p2 mb-5 inline-block text-black-light font-semibold">
          The MVP
        </span>
        <div className="flex flex-wrap text-black-light">
          {mvpItems.map(item => {
            return (
              <div className="bg-greenBG p-4 mb-12 project-details-card">
                <p className="p4 font-semibold mb-7">{item.title}</p>
                <p className="p4">{item.body}</p>
              </div>
            )
          })}
        </div>
        <span className="p2 mb-5 inline-block text-black-light font-semibold">
          Additions in the second phase
        </span>
        <div className="flex flex-wrap">
          {phaseItems.map(item => {
            return (
              <div className="bg-blueBG p-4 mb-12 project-details-card">
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
