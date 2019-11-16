import React from "react"
import * as S from "../styles/components/portfolio"

const Portfolio = () => {
  return (
    <S.PortfolioWrapper>
      <S.PortfolioItem>
        <S.PortfolioTitle>Websites</S.PortfolioTitle>
      </S.PortfolioItem>
      <S.PortfolioItem>
        <S.PortfolioTitle>Apps</S.PortfolioTitle>
      </S.PortfolioItem>
      <S.PortfolioItem>
        <S.PortfolioTitle>Logos</S.PortfolioTitle>
      </S.PortfolioItem>
      <S.PortfolioItem>
        <S.PortfolioTitle>Others</S.PortfolioTitle>
      </S.PortfolioItem>
    </S.PortfolioWrapper>
  )
}

export default Portfolio