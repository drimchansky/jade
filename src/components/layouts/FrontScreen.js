import React from 'react'
import styled from 'styled-components'

import Header from '../header/Header'

const FrontScreenStyled = styled.div`
  background: rebeccapurple;
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
