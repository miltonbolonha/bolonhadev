import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

import GatsbyIcon from "../../images/gatsby-icon.png"
import ReactIcon from "../../images/react-icon.png"

const BottomCopy = () => {
  const { site: { siteMetadata: { author } }} = useStaticQuery(graphql`
  query BottomCopy {
    site {
      siteMetadata {
        author
      }
    }
  }
`)

  return (
    <S.BottomCopyWrapper>
      © Todos os direitos reservados a {author} | 
      <img src={GatsbyIcon} alt="Gatsby" width="16px" height="16px" /> 
      <img src={ReactIcon} alt="React" width="20px" height="16px" /> 
    </S.BottomCopyWrapper>
  )
}

export default BottomCopy