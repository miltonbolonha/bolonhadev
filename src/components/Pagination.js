import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

import * as S from "../styles/components/pagination"

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
  <S.PaginationWrapper>
    <p>
      {currentPage} de {numPages}
    </p>
    {!isFirst && <Link to={prevPage}>← página anterior</Link>}
    {!isLast && <Link to={nextPage}>próxima página →</Link> }
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination