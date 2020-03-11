import React from 'react'
import styled from 'styled-components'

import { colors, breakpoints } from '../utility/variables'
import Header from '../header/Header'

const FrontScreenStyled = styled.div`
  background: ${colors.secondaryTwo};
  min-height: 100vh;

  @media (${breakpoints.large}) {
    min-height: 100vh;
  }
`

const FrontScreen = () => {
  return (
    <>
      <FrontScreenStyled></FrontScreenStyled>
    </>
  )
}

export default FrontScreen
