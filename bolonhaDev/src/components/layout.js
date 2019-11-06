import React from "react"
import PropTypes from "prop-types"

import Breadcrumb from "./Breadcrumb"
import Commands from "./Commands"


const Layout = ({ children, crumbLabel }) => {

  return (   
    <>
      <main>
        <Breadcrumb actualSite={crumbLabel} />
        {children}
      </main>
      <aside>
        <Commands/>
      </aside>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
