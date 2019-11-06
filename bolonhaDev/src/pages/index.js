import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Breadcrumb from "../components/Breadcrumb"

const IndexPage = () => (
  <Layout crumbLabel="master">
    <SEO title="Home" />
    {/* <Breadcrumb /> */}
  </Layout>
)

export default IndexPage
