import * as React from "react"
import Layout from "../components/pageLayout"
import Seo from "../components/seo"
import Hero from "../components/projects/asian-paints/hero.jsx"
import Intro from "../components/projects/asian-paints/Intro.jsx"
import Problem from "../components/projects/asian-paints/problem.jsx"
import Project from "../components/projects/asian-paints/project.jsx"
import Design from "../components/projects/asian-paints/design.jsx"
import Challenges from "../components/projects/asian-paints/challenges.jsx"
import Library from "../components/projects/asian-paints/library.jsx"
import Components from "../components/projects/asian-paints/components.jsx"
import DevAndUI from "../components/projects/asian-paints/dev-and-ui.jsx"
import Insights from "../components/projects/asian-paints/insights.jsx"
import Testimonial from "../components/projects/asian-paints/testimonial.jsx"

const IndexPage = () => (
  <Layout>
    <Seo title="Work" />
    <Hero />
    <Intro />
    <Problem />
    <Project />
    <Design />
    <Challenges />
    <Library />
    <Components />
    <DevAndUI />
    <Insights />
    <Testimonial />
  </Layout>
)

export default IndexPage
