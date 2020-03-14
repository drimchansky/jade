// libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// custom
import { colors, breakpoints } from '../../utility/variables'

const Logo = ({ front, position, mobile }) => {
  return (
    <StyledLogo front={front} position={position} mobile={mobile}>
      Jade
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  position: ${props => props.position || ''};
  left: 0;
  top: 0;
  font-weight: 900;
  font-size: 2rem;
  align-self: flex-start;
  padding: 1rem;
  color: ${colors.white};
  text-decoration: none;
  z-index: 999;

  @media (${breakpoints.large}) {
    color: ${props => (props.front ? colors.white : colors.secondaryTwo)};
    display: ${props => (props.mobile ? 'none' : 'block')};
    z-index: ${props => (props.mobile ? '-1' : '1')};
    padding-left: 0.5rem;
  }
  @media (${breakpoints.extra}) {
  }
`

export default Logo
