// libraries
import React from 'react'
import styled from 'styled-components'
// components
import Logo from './Logo'
import NavList from './NavList'
import Number from './Number'
// custom
import { colors, breakpoints } from '../../utility/variables'

const Navigation = ({ open, setOpen, frontpage }) => {
  return (
    <NavigationStyled open={open} frontpage={frontpage}>
      <Logo frontpage={frontpage} />
      <NavList open={open} setOpen={setOpen} frontpage={frontpage} />
      <Number frontpage={frontpage} />
    </NavigationStyled>
  )
}

const NavigationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${colors.secondaryOne};
  color: ${colors.white};
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  transition: all 0.3s ease-in-out;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? '1' : '0')};
  transform: ${props => (props.open ? 'scale(1)' : 'scale(0.4)')};
  z-index: 300;

  @media (${breakpoints.large}) {
    display: flex;
    height: auto;
    width: 100%;
    visibility: visible;
    opacity: 1;
    padding: 1rem 0;
    position: ${props => (props.frontpage ? 'absolute' : 'relative')};
    top: 0;
    left: ${props => (props.frontpage ? '50%' : '0')};
    transform: ${props => (props.frontpage ? 'translateX(-50%)' : 'none')};
    background: transparent;
    flex-direction: row;
    max-width: 1400px;
    margin: 0 auto;
    z-index: 10;
    align-items: center;
  }
`

export default Navigation
