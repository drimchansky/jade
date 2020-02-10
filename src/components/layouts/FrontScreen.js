import React from 'react'
import styled from 'styled-components'

import { colors, breakpoints, fonts } from '../utility/variables'
import Header from '../header/Header'

const FrontScreenStyled = styled.div`
  background: ${colors.secondaryOne};

  @media (${breakpoints.large}) {
    min-height: 100vh;
  }
`

const FrontScreen = () => {
  return (
    <>
      <FrontScreenStyled>
        <Header />
      </FrontScreenStyled>
    </>
  )
}

export default FrontScreen
