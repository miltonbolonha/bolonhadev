import React from "react"
import PropTypes from "prop-types"

import SettingStyles from "../../styles/settings"

import * as S from "./styled"
import TopEmail from "../TopEmail"
import Breadcrumb from "../Breadcrumb"
import Commands from "../Commands"



const Layout = ({ children, crumbLabel }) => {

  return (   
    <S.LayoutWrapper>
      <SettingStyles />
      <S.LayoutMain>
        <TopEmail />
        <S.MainContainer>
          <Breadcrumb actualSite={crumbLabel} />
          {children}
        </S.MainContainer>
      </S.LayoutMain>
      <aside>
        <Commands/>
      </aside>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
