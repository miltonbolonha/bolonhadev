import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
// import Breadcrumb from "../components/Breadcrumb"

const IndexPage = () => (
  <Layout crumbLabel="master">
    <SEO title="Home" />
    <p>Bem vindo ao meu site !</p>
  </Layout>
)

export default IndexPage
