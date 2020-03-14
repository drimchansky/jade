import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors, breakpoints } from '../../utility/variables'

const StyledLogo = styled(Link)`
  font-weight: 900;
  font-size: 2rem;
  align-self: flex-start;
  padding: 2rem;
  color: ${colors.white};
  text-decoration: none;

  @media (${breakpoints.large}) {
    color: ${props => (props.front ? colors.white : colors.secondaryTwo)};
  }
`

const Logo = ({ front }) => {
  return <StyledLogo front={front}>Jade</StyledLogo>
}

export default Logo
