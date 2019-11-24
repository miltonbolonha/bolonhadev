import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../styles/components/singlepost"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout crumbLabel={post.fields.slug.slice(1,-1)}>
      <SEO 
        title={post.frontmatter.title} 
        description={post.frontmatter.description} 
        image={post.frontmatter.image} 
      />
      <S.PostHeader>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDate>{post.frontmatter.date}</S.PostDate>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query SinglePost($slug: String!){
    markdownRemark(fields: { slug: { eq: $slug }}){
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        image
      }
      html
      fields {
        slug
      }
    }
  }
`

export default SinglePost