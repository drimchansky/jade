import React, { useState } from 'react'

import GlobalStyles from '../utility/GlobalStyles'
import SiteMetadata from '../utility/SiteMetadata'
import Hamburger from '../common/Hamburger'

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <SiteMetadata />
      <GlobalStyles />
      <>{children}</>
    </>
  )
}

export default Layout
