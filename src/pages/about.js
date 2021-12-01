import * as React from "react"
import Layout from "../components/pageLayout"
import Seo from "../components/seo"
import Hero from "../components/about/hero.jsx"
import WhoWhat from "../components/about/WhoWhat.jsx"
import Testimonial from "../components/about/testimonial.jsx"
import LatestGreatest from "../components/about/latestGreatest.jsx"

const IndexPage = () => (
  <Layout>
    <Seo title="About" />
    <Hero />
    <WhoWhat />
    <Testimonial />
    <LatestGreatest />
  </Layout>
)

export default IndexPage
