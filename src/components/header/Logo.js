import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

import { colors } from '../utility/variables'

const StyledLogo = styled(Link)`
  font-weight: 900;
  font-size: 2rem;
  align-self: flex-start;
  padding: 2rem;
  color: ${props =>
    props.location.pathname === '/' ? colors.white : colors.primaryTwo};
  text-decoration: none;
`

const Logo = () => {
  return (
    <Location>
      {({ location }) => <StyledLogo location={location}>Looper</StyledLogo>}
    </Location>
  )
}

export default Logo
