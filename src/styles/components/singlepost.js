import styled from "styled-components"

export const PostHeader = styled.header`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`

export const PostTitle = styled.h1`
  color: #7aed91;
  font-weight: 900;
`

export const PostDescription = styled.h2`
  color: #eaf4f4;
`

export const PostDate = styled.time`
  color:#e679fc;
  font-size:12px;
  line-height: 22px;
`

export const MainContent = styled.section`
  
  & h1,& h2,& h3{
    color:#eaf4f4;
    font-weight: 900;
    margin-bottom: 15px;
  }
  & h1{
    text-transform: uppercase;
    text-shadow: 1px 1px 0px #040508;
  }
`

export const Separator = styled.p`
  margin: 0 10px;
`

