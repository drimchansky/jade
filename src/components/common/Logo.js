// libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// custom
import { colors, breakpoints } from '../../utility/variables'

const Logo = ({ frontpage, position, mobile }) => {
  return (
    <StyledLogo to="/" frontpage={frontpage} position={position} mobile={mobile}>
      Jade
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  position: ${props => props.position || ''};
  left: 0;
  top: 0;
  font-weight: 700;
  font-size: 2rem;
  align-self: flex-start;
  padding: 1rem;
  color: ${colors.white};
  text-decoration: none;
  z-index: 999;

  @media (${breakpoints.large}) {
    color: ${props => (props.frontpage ? colors.white : colors.secondaryTwo)};
    display: ${props => (props.mobile ? 'none' : 'block')};
    z-index: ${props => (props.mobile ? '-1' : '1')};
    padding-left: 0.5rem;
  }
`

export default Logo
