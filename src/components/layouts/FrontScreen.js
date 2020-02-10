import React from 'react'
import styled from 'styled-components'

import colors from '../utility/colors'
import Header from '../header/Header'

const FrontScreenStyled = styled.div`
  background: ${colors.tetriary};
  height: 100px;
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
