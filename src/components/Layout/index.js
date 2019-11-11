import React from "react"
import PropTypes from "prop-types"

import SettingStyles from "../../styles/settings"
import GenericStyles from "../../styles/generic"
import BaseStyles from "../../styles/base"

import * as S from "./styled"
import TopEmail from "../TopEmail"
import Breadcrumb from "../Breadcrumb"
import TerminalInput from "../TerminalInput"
import Commands from "../Commands"

const Layout = ({ children, crumbLabel }) => {

  return (   
    <S.LayoutWrapper>
      <SettingStyles />
      <GenericStyles />
      <BaseStyles />
      <S.LayoutMain>
        <TopEmail />
        <S.MainContainer>
          <Breadcrumb actualSite={crumbLabel} />
          <TerminalInput />
          {children}
        </S.MainContainer>
      </S.LayoutMain>
      <Commands/>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
