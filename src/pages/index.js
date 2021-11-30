import * as React from "react"
import Layout from "../components/pageLayout"
import Seo from "../components/seo"
import Hero from "../components/home/hero.jsx"
import Projects from "../components/home/projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Projects />
  </Layout>
)

export default IndexPage
