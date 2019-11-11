import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import BlogPosts from "../components/Blog"
// import Breadcrumb from "../components/Breadcrumb"

const BlogPage = () => (
  <Layout crumbLabel="blog">
    <SEO title="Blog" />
    <BlogPosts />
  </Layout>
)

export default BlogPage