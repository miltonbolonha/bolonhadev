---
title: Coceira nas costas
description: >-
  Bloguius dus Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
  disputationi eu sit. Vide electram sadipscing et per. Sou preto inteiris,
  inteiris. Quem manda na minha terra sou euzis!
date: 2019-12-05T00:00:00.000Z
image: /assets/images/terminal-cover.jpg
category: vida-dev
---

A First Level Header
====================

```jsx
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../styles/components/singlepost"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout crumbLabel={post.fields.slug.slice(1,-1)}>
      <SEO title={post.frontmatter.title} />
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
    </Layout>
  )
}

export default SinglePost
```

As Second Level Header
---------------------

Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.

### Header 3

> This is a blockquote.
> 
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote
