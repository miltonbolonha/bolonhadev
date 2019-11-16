import React from "react"
import { Link } from 'gatsby';
import styled from "styled-components"

export const Aside = styled.aside`
  display: flex;
  align-items: center;
`

export const CommandsTitle = styled.h3`
  color: #9dedfc;
  margin: 10px 0 20px;
  text-align: center;
`

export const CommandsWrapper = styled.ul`
  background: #3f4350;
  border: 1px solid #15171c;
  border-right: 0;
  padding: 15px;
`

export const CommandsItem = styled.li`
  margin:10px 50px 10px 10px;
`
export const CommandLink = styled(props => <Link {...props} />)`
  color: #7aed91;
  text-decoration: none;

  &.active{
    color: #e679fc;
  }
`;