import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

import GatsbyIcon from "../../images/gatsby-icon.png"
import ReactIcon from "../../images/react-icon.png"
import NetlifyIcon from "../../images/netlify.png"

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
      © Todos os direitos reservados a {author} <S.separator>|</S.separator>
      <img src={GatsbyIcon}  width="16px" height="16px" alt="Develop with Gatsby"  title="Gatsby" /> 
      <img src={ReactIcon}   width="20px" height="16px" alt="Develop with React"   title="React"   /> 
      <img src={NetlifyIcon} width="16px" height="16px" alt="Develop with Netlify" title="Netlify"  /> 
    </S.BottomCopyWrapper>
  )
}

export default BottomCopy