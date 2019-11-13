import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PostItem from "../PostItem"

const BlogPosts = () => {

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostQuery {
        allMarkdownRemark {
          edges {
            node {
              fields{
                slug
              }
              frontmatter {
                category
                date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                description
                title
              }
            }
          }
        }
      }
    `
  )

  const postList = allMarkdownRemark.edges

return ( 
  <>
    {postList.map(
      ({
        node: { 
          frontmatter: { category, date, description, title },
          fields: { slug }
        },
      }) => (
      <PostItem
        slug={slug}
        title={title}
        description={description}
        category={category}
        date={date}
      />
      )
    )}
    </>
  )
}

export default BlogPosts