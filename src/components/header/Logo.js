import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.span`
  font-weight: 900;
  font-size: 2rem;
  align-self: flex-start;
  padding: 2rem;
`

const Logo = () => {
  return <StyledLogo>Looper</StyledLogo>
}

export default Logo
