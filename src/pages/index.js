import * as React from "react"
import Layout from "../components/pageLayout"
import Seo from "../components/seo"
import Hero from "../components/home/hero.jsx"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
