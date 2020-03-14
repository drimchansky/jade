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
  z-index: 10;

  @supports (clip-path: circle(0px)) {
    transition: clip-path 0.7s ease-in-out;
    clip-path: ${props =>
      props.open ? 'circle(250% at top right)' : 'circle(0px at top right)'};
  }

  @media (${breakpoints.large}) {
    height: auto;
    width: 100%;
    opacity: 1;
    padding: 1rem 0;
    position: ${props => (props.front ? 'absolute' : 'relative')};
    transform: none;
    clip-path: none;
    background: transparent;
    flex-direction: row;
    max-width: 1400px;
    margin: 0 auto;
    z-index: 10;
    align-items: center;
    left: ${props => (props.front ? '50%' : '')};
    transform: ${props => (props.front ? 'translateX(-50%)' : '')};
  }
`

const Navigation = ({ open, front, setOpen }) => {
  return (
    <NavigationStyled open={open} front={front}>
      <Logo front={front} />
      <NavList front={front} open={open} setOpen={setOpen} />
      <Number front={front} />
    </NavigationStyled>
  )
}

export default Navigation
