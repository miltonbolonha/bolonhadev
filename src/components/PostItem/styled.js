import styled from "styled-components"
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
  border: 2px dashed white;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
`
export const PostItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const PostItemCaT = styled.div`
  margin-left: 10px;
  color: #eaf4f4;
`

export const PostItemInfo = styled.div`
  flex-direction: row;
  display: flex;
`

export const PostItemDate = styled.time`
  color: #eaf4f4;
  margin-left: 10px;
`

export const PostItemTitle = styled.h1`
  color: #eaf4f4;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: bolder;
`

export const PostItemDescription = styled.p`
  
`