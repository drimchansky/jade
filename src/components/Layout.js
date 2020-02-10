import React from 'react'

import GlobalStyles from './GlobalStyles'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <>{children}</>
    </>
  )
}

export default Layout
