import styled from "styled-components"
import media from "styled-media-query"

export const BottomCopyWrapper  = styled.p`
  background-color: #2c3133;
  border-top: 1px solid #181b1c;
  text-shadow: 1px 1px 0px #040508;
  color: #fff;
  font-size: 15px;
  min-height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  flex-grow: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;

  ${media.lessThan("medium")`
    font-size: 9px;
  `}  
`

export const separator  = styled.span`
  margin: 0 5px;
`