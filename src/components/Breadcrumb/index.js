import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Breadcrumb = ({ actualSite }) => {
  const { site: { siteMetadata: { email, author } }} = useStaticQuery(graphql`
  query BolonhaDevMetaData {
    site {
      siteMetadata {
        title
        description
        author
        email
      }
    }
  }      
`)

return (
  <>
    <p>{email}</p>
    <h2>{author}</h2>
    <p>in site</p>
    <p>on</p> <h1>{ actualSite }</h1> <span>[+]</span>
  </>
)
}

export default Breadcrumb