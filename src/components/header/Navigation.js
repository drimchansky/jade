// libraries
import React from 'react'
import styled from 'styled-components'
// components
import Logo from '../common/Logo'
import NavList from './NavList'
import Number from './Number'
// custom
import { colors, breakpoints } from '../../utility/variables'

const Navigation = ({ open, front, setOpen }) => {
  return (
    <NavigationStyled open={open} front={front}>
      <Logo front={front} />
      <NavList front={front} open={open} setOpen={setOpen} />
      <Number front={front} />
    </NavigationStyled>
  )
}

const NavigationStyled = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
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
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  z-index: 10;

  @media (${breakpoints.large}) {
    display: flex;
    height: auto;
    width: 100%;
    visibility: visible;
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

export default Navigation
