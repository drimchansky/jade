import React from 'react'
import styled from 'styled-components'

import { colors, breakpoints } from '../utility/variables'
import Logo from './Logo'
import NavList from './NavList'
import Number from './Number'

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <NavList />
      <Number />
    </HeaderStyled>
  )
}

export default Header
