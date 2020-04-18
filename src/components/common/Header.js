// libraries
import React, { useState } from 'react'
// components
import Navigation from './Navigation'
import Hamburger from './Hamburger'

const Header = ({ frontPage }) => {
  // mobile menu state
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <Navigation open={open} setOpen={setOpen} frontPage={frontPage} />
    </>
  )
}

export default Header
