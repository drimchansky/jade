import React from 'react'
import styled from 'styled-components'

import Logo from '../common/Logo'
import NavList from './NavList'
import Number from './Number'

import { colors, breakpoints } from '../../utility/variables'

const NavigationStyled = styled.div`
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

  @supports (clip-path: circle(0px)) {
    transition: clip-path 0.7s ease-in-out;
    clip-path: ${props =>
      props.open ? 'circle(250% at top right)' : 'circle(0px at top right)'};
  }

  @media (${breakpoints.large}) {
    position: relative;
    height: auto;
    width: 100%;
    opacity: 1;
    position: relative;
    transform: none;
    clip-path: none;
    background: transparent;
    flex-direction: row;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;
  }
`

const Navigation = ({ open }) => {
  return (
    <NavigationStyled open={open}>
      <Logo />
      <NavList />
      <Number />
    </NavigationStyled>
  )
}

export default Navigation
