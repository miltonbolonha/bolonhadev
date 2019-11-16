import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio"
// import Breadcrumb from "../components/Breadcrumb"

const PortfolioPage = () => (
  <Layout crumbLabel="portfolio">
    <SEO title="Portfolio" />
    <Portfolio />
  </Layout>
)

export default PortfolioPage