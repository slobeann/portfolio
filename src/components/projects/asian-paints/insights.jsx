import React, { useState } from "react"
import { Container } from "../../layout"

function design() {
  return (
    <div className="bg-primary-light">
      <Container>
        <h3 className="mr-auto font-body">Insights and takeaways</h3>
        <p className="p3 text-black-light">
          I'm incredibly grateful to have gotten to work on this project with a
          team that was so passionate about creating a unique e-commerce
          experience. Aside from everything I learned about e-commerce, here are
          a few larger lessons I learned from this project:
        </p>
        <ul className="text-black-light">
          <li className="mb-4">
            <p className="p3 font-semibold">
              Finish your primary design library before you embark on the visual
              design.
            </p>
            <p className="p3">
              When you've got multiple people working on the same UI, it's hard
              to keep a track of standardisation across all screens without a
              template to go by. Creating a primary design library (fonts,
              buttons, icons, spacing etc) allows team members to work on
              screens in parallel and minimises the scope for post
              standardisation.
            </p>
          </li>
          <li className="mb-4">
            <p className="p3 font-semibold">
              UX Design can aid business strategies.
            </p>
            <p className="p3">
              We designed the e-commerce portal to not only be a satisfying
              experience for the user, but also as a testing ground for business
              strategy ideas. Eg. while asking the user about their shipping
              information, we also asked if they'd prefer environment friendly
              packaging.
            </p>
          </li>
          <li>
            <p className="p3 font-semibold">
              Design can be intuitive without it necessarily being familiar.
            </p>
            <p className="p3">
              I learned that it's easy to take the route of familiarity when
              there's an abundance of similar looking successful e-commerce
              portals telling you the right way to design one. But good things
              can come out of trying something new. Granted you test your
              hypothesis with the target audience.
            </p>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default design
