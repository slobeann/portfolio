import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../../layout"
import ContentWithImg from "./ContentWithImg.jsx"

function design() {
  return (
    <div className="">
      <Container>
        <h3 className="mr-auto font-body">Design challenges I tackled</h3>
        <p className="p3 section__intro">
          We had to create the UI to be in line with the Beautiful Homes’ design
          system, while finding ways to make it stand out as an e-commerce
          experience.
        </p>
        <p className="p3 section__intro mb-10">
          Here are a few questions I tackled:
        </p>
        <ContentWithImg
          image={
            <StaticImage src="../../../images/projects/asian-paints/design-3.png" />
          }
        >
          <p className="p3 font-semibold mb-6">
            What is the most important part of the order summary for a user?
          </p>
          <p className="p3 mb-5">
            It’s often possible that different items within the same order
            arrive on different dates. While designing the order summary page, I
            had to choose between showing a division of the order into batches
            on the basis of their delivery dates or showing the order as a
            whole.
          </p>
          <p>
            I eventually chose to chose the former because the user wants to
            primarily know when their order is arriving. To give priority to
            tracking details, I had to divide the order into batches.
          </p>
        </ContentWithImg>
        <ContentWithImg
          image={
            <StaticImage src="../../../images/projects/asian-paints/design-4.png" />
          }
        >
          <p className="p3 font-semibold mb-6">
            Can I inspire people to customise their furniture?
          </p>
          <p className="p3 mb-5">
            While the ability to customise furniture is an exciting new feature
            in the Indian context, for the same reason it can also be daunting
            and confusing. To inspire and simultaneously instil trust in the
            minds of the user I added a 'Get Inspired' section to the
            customisation home page.
          </p>
          <p className="p3">
            This section would show the before and after of other users'
            customisation, their reviews and also provide the ability to
            directly buy another user's purchase. This may also incentivise the
            user to want their armchair on this page like Riya.
          </p>
        </ContentWithImg>
        <ContentWithImg
          image={
            <StaticImage src="../../../images/projects/asian-paints/design-5.png" />
          }
        >
          <p className="p3 font-semibold mb-6">
            How do I make FAQs more accessible?
          </p>
          <p className="p3 mb-5">
            I wanted more people to read FAQs before jumping at the ability to
            call/text customer support. For this, I suggested context specific
            FAQs. This would mean that clicking on "Need Help" in the Delivery
            Tracking section takes the user to FAQs related to delivery.
          </p>
        </ContentWithImg>
        <ContentWithImg
          image={
            <StaticImage src="../../../images/projects/asian-paints/design-6.png" />
          }
        >
          <p className="p3 font-semibold mb-6">
            How do I make a product feel premium?
          </p>
          <p className="p3 mb-5">
            There’s a lot of different types of shoppers- wandering, impulse,
            convenience, informed, discount seekers - and we needed to make them
            all stick. For this, I created a box diagram of the homepage and
            allocated space to each type of shopper in a way that would weave a
            coherent story for the user.
          </p>
        </ContentWithImg>
        <ContentWithImg
          image={
            <StaticImage src="../../../images/projects/asian-paints/design-7.png" />
          }
        >
          <p className="p3 font-semibold mb-6">
            How do I best cater to all types of shoppers landing on the
            homepage?
          </p>
          <p className="p3 mb-5">
            Asian Paints wanted a section of their e-commerce portal dedicated
            to their premium product line. These products were shinier, fancier
            and more expensive and I needed to find a way to convey that to the
            user.
          </p>
          <p className="p3">
            What makes a product premium is its superior craftsmanship - and I
            decided to tell that story. The premium product details page focused
            on telling the user what makes this product special - how it was
            crafted, its features, certifications. I also worked on tweaking the
            UI to visually convey the feeling of opulence.
          </p>
        </ContentWithImg>
      </Container>
    </div>
  )
}

export default design
