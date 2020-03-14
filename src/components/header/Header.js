import React, { useState } from 'react'

import Navigation from './Navigation'
import Hamburger from './Hamburger'

const Header = ({ front }) => {
  const [open, setOpen] = useState(false)
  console.log(front)
  return (
    <>
      <Hamburger open={open} setOpen={setOpen} />
      <Navigation open={open} />
    </>
  )
}

export default Header
