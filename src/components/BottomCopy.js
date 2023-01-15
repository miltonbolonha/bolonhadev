import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "../styles/components/bottomcopy"

export default ({ data }) => {
  
const { 
    site: { siteMetadata: { author } }
  } = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      author
    }
  }


}
`
)
  return (
    <S.BottomCopyWrapper>
      © Todos os direitos reservados a {author} <S.separator>|</S.separator>
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
