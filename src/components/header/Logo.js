import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors, breakpoints, fonts } from '../utility/variables'

const StyledLogo = styled(Link)`
  font-weight: 900;
  font-size: 2rem;
  align-self: flex-start;
  padding: 2rem;
  color: ${colors.white};
  text-decoration: none;
`

const Logo = () => {
  return <StyledLogo>Looper</StyledLogo>
}

export default Logo
