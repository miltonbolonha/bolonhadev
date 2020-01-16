import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "../styles/components/bottomcopy"

export default ({ data }) => {
  
const { 
    site: { siteMetadata: { author } }, 
    gatsbyIcon, 
    reactIcon, 
    netlifyIcon 
  } = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      author
    }
  }
  gatsbyIcon: file(relativePath: {eq: "gatsby-icon.png"}) {
    childImageSharp {
      fixed(width: 16, height: 16) {
        base64
        tracedSVG
        aspectRatio
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
      } 
    }
  }
  reactIcon: file(relativePath: {eq: "react-icon.png"}) {
    childImageSharp {
      fixed(width: 20, height: 16) {
        base64
        tracedSVG
        aspectRatio
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  }
  netlifyIcon: file(relativePath: {eq: "netlify.png"}) {
    childImageSharp {
      fixed(width: 16, height: 16) {
        base64
        tracedSVG
        aspectRatio
        width
        height
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  }
}
`
)
  console.log(reactIcon)
  return (
    <S.BottomCopyWrapper>
      © Todos os direitos reservados a {author} <S.separator>|</S.separator>
      <S.BottomCopyImgs 
        fixed={gatsbyIcon.childImageSharp.fixed}  
        width={reactIcon.childImageSharp.fixed.width} 
        height={reactIcon.childImageSharp.fixed.height} 
        alt="Develop with Gatsby"  
        title="Gatsby" 
      /> 
      <S.BottomCopyImgs 
        fixed={reactIcon.childImageSharp.fixed}  
        width={reactIcon.childImageSharp.fixed.width} 
        height={reactIcon.childImageSharp.fixed.height} 
        alt="Develop with ReactJS"  
        title="ReactJS" 
      /> 
      <S.BottomCopyImgs 
        fixed={netlifyIcon.childImageSharp.fixed}  
        width={netlifyIcon.childImageSharp.fixed.width} 
        height={netlifyIcon.childImageSharp.fixed.height} 
        alt="Develop with Netlify"  
        title="Netlify" 
      /> 
      {/* <Img fluid={ReactIcon}   width="20px" height="16px" alt="Develop with React"   title="React"   />  */}
      {/* <Img fluid={NetlifyIcon} width="16px" height="16px" alt="Develop with Netlify" title="Netlify"  />  */}
    </S.BottomCopyWrapper>
  )
}





// export const query = graphql`
// query {
//   site {
//     siteMetadata {
//       author
//     }
//   }
//   file(relativePath: {eq: "gatsby-icon.png"}) {
//     childImageSharp {
//       fluid(maxWidth: 16, maxHeight: 16) {
//         base64
//         tracedSVG
//         aspectRatio
//         src
//         srcSet
//         srcWebp
//         srcSetWebp
//         sizes
//         originalImg
//         originalName
//         presentationWidth
//         presentationHeight
//       }
//     }
//   }
// }
// `