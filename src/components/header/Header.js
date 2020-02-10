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
  background: ${colors.secondaryOne};
  color: ${colors.white};
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: transform 0.2s ease-in-out;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(120%)')};
`

const Header = ({ open }) => {
  return (
    <HeaderStyled open={open}>
      <Logo />
      <NavList />
      <Number />
    </HeaderStyled>
  )
}

export default Header
