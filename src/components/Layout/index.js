import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import SettingStyles from "../../styles/settings"

import Breadcrumb from "../Breadcrumb"
import Commands from "../Commands"

const LayoutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #040508;
  height: 100vh;
  /* padding: 20rem; */
  width: 100%;
`

const LayoutMain = styled.main`
  background-color: #282a36;
  border: 1px solid #434759;
  padding: 5px;
  max-height: 600px;
  max-width: 800px;
  height: 100%;
  width: 100%;
  margin: auto;
`

const Layout = ({ children, crumbLabel }) => {

  return (   
    <LayoutWrapper>
      <SettingStyles />
      <LayoutMain>
        <Breadcrumb actualSite={crumbLabel} />
        {children}
      </LayoutMain>
      <aside>
        <Commands/>
      </aside>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
