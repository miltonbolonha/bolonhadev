import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "../styles/components/topemail"

const TopEmail = () => {
  const { site: { siteMetadata: { email } }} = useStaticQuery(graphql`
  query TopEmail {
    site {
      siteMetadata {
        email
      }
    }
  }
`)

  return (
    <S.TopEmailWrapper>{email}</S.TopEmailWrapper>
  )
}

export default TopEmail