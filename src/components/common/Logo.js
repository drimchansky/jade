import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors } from '../../utility/variables'

const StyledLogo = styled(Link)`
  font-weight: 900;
  font-size: 2rem;
  align-self: flex-start;
  padding: 2rem;
  color: ${props => props.front ? colors.white : colors.secondaryTwo};
  text-decoration: none;
`

const Logo = ({ front }) => {
  return <StyledLogo front={front}>Jade</StyledLogo>
}

export default Logo
