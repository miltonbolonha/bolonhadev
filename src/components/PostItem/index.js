import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({ slug, title, description, category, date }) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemTitle>{title} • </S.PostItemTitle>
        <S.PostItemDate>{date} • </S.PostItemDate>
        <S.PostItemCaT>{category}</S.PostItemCaT>
      </S.PostItemInfo>
        <S.PostItemDescription>{description}</S.PostItemDescription>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default PostItem