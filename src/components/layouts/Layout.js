import React from 'react'

import GlobalStyles from '../utility/GlobalStyles'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <>{children}</>
    </>
  )
}

export default Layout
