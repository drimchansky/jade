import React, { useState } from 'react'

import Navigation from './Navigation'
import Hamburger from './Hamburger'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <Navigation open={open} />
    </>
  )
}

export default Header
