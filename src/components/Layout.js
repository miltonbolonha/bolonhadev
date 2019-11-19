import React, { useState }  from "react"
import PropTypes from "prop-types"

import SettingStyles from "../styles/settings"
import GenericStyles from "../styles/generic"
import BaseStyles from "../styles/base"

import * as S from "../styles/components/layout"
import TopEmail from "./TopEmail"
import Breadcrumb from "./Breadcrumb"
import TerminalInput from "./TerminalInput"
import Commands from "./Commands"
import BottomCopy from "./BottomCopy"


const Layout = ({ children, crumbLabel }) => {

  let [hideChildren,sethideChildren] = useState(false)
  
  const handleIsSearching = e => {
    if(e.target.value.length>1){
      sethideChildren(true)
      // console.log({hideChildren})
    }else{
      sethideChildren(false)
      // console.log({hideChildren})
    }
  }
  
  return (   
    
    <S.LayoutWrapper>
      <SettingStyles />
      <GenericStyles />
      <BaseStyles />
      <S.LayoutMain>
      <TopEmail />
        <S.MainContainer>
          <Breadcrumb actualSite={crumbLabel} />
          <TerminalInput setIsSearching={e => handleIsSearching(e)} />
          {hideChildren ? null : children}
        </S.MainContainer>
        <BottomCopy />
      </S.LayoutMain>
      <Commands/>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
