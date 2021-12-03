import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../../layout"
import ContentWithImg from "./ContentWithImg.jsx"

function design() {
  return (
    <div className="">
      <Container>
        <h3 className="mr-auto font-body">Components</h3>
        <p className="p3 section__intro mb-6">Some components I created </p>
        <ContentWithImg
          image={
            <StaticImage src="../../../images/projects/asian-paints/component-1.png" />
          }
        >
          <p className="p3 font-semibold mb-6">Context-specific support</p>
          <p className="p3 mb-5">
            Clicking on "Need Help" in the Delivery Tracking section takes the
            user to FAQs related to delivery.
          </p>
        </ContentWithImg>
        <ContentWithImg
          image={
            <StaticImage src="../../../images/projects/asian-paints/component-2.png" />
          }
        >
          <p className="p3 font-semibold mb-6">Comprehensive search</p>
          <p className="p3 mb-5">
            The Search feature allows the user to discover the most relevant
            results across the Beautiful Homes website, while prioritising the
            e-commerce portal.
          </p>
        </ContentWithImg>
        <ContentWithImg
          image={
            <StaticImage src="../../../images/projects/asian-paints/component-3.png" />
          }
        >
          <p className="p3 font-semibold mb-6">Reduced navigation</p>
          <p className="p3 mb-5">
            All actionable items are placed upfront to minimise navigation for
            the user.
          </p>
        </ContentWithImg>
        <ContentWithImg
          image={
            <StaticImage src="../../../images/projects/asian-paints/components-4.png" />
          }
        >
          <p className="p3 font-semibold mb-6">Intelligent feedback</p>
          <p className="p3 mb-5">
            The user is prompted to elaborate with feedback on a product they
            purchased on the basis of the rating they gave the product.
          </p>
        </ContentWithImg>
      </Container>
    </div>
  )
}

export default design
