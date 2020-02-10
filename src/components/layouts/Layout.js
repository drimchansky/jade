import React from 'react'

import GlobalStyles from '../utility/GlobalStyles'
import SiteMetadata from '../utility/SiteMetadata'

const Layout = ({ children }) => {
  return (
    <>
      <SiteMetadata />
      <GlobalStyles />
      <>{children}</>
    </>
  )
}

export default Layout
