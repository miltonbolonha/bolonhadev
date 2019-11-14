import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Breadcrumb = ({ actualSite }) => {
  const { site: { siteMetadata: { author } }} = useStaticQuery(graphql`
  query BreadMetaData {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`)

return (
  <S.BreadcrumbWrapper>
    <S.BreadcrumbAuthor>{author}</S.BreadcrumbAuthor>
    <S.BreadcrumbPlace>in site on</S.BreadcrumbPlace>
    <S.BreadcrumbPage>{ actualSite }</S.BreadcrumbPage> 
    <S.BreadcrumbIcon>[+]</S.BreadcrumbIcon>
  </S.BreadcrumbWrapper>
)
}

export default Breadcrumb