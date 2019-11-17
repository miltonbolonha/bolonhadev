import React from 'react'
import * as S from "../styles/components/commands"

const Commands = () => (
  <S.Aside>
    <S.CommandsWrapper>
      <S.CommandsTitle>Commands</S.CommandsTitle>
      <S.CommandsItem>
        <S.CommandLink to="/" activeClassName="active">/master</S.CommandLink>
      </S.CommandsItem>
      <S.CommandsItem>
        <S.CommandLink to="/info" activeClassName="active">/info</S.CommandLink>
      </S.CommandsItem>
      <S.CommandsItem>
        <S.CommandLink to="/contact" activeClassName="active">/contact</S.CommandLink>
      </S.CommandsItem>
      <S.CommandsItem>
        <S.CommandLink to="/portfolio" activeClassName="active">/portfolio</S.CommandLink>
      </S.CommandsItem>
      <S.CommandsItem>
        <S.CommandLink to="/clean" activeClassName="active">/clean</S.CommandLink>
      </S.CommandsItem>
      <S.CommandsItem>
        <S.CommandLink to="/list" activeClassName="active">/list</S.CommandLink>
      </S.CommandsItem>
      <S.CommandsItem>
        <S.CommandLink to="/blog" activeClassName="active">/blog</S.CommandLink>
      </S.CommandsItem>
      <S.CommandsItem>
        <S.CommandLink to="/last-post" activeClassName="active">/last</S.CommandLink>
      </S.CommandsItem>
      <S.CommandsItem>
        <S.CommandLink to="/best" activeClassName="active">/best</S.CommandLink>
      </S.CommandsItem>
      <S.CommandsItem>
        <S.CommandLink to="/twitter" activeClassName="active">/twitter</S.CommandLink>
      </S.CommandsItem>
    </S.CommandsWrapper>
  </S.Aside>
)

export default Commands