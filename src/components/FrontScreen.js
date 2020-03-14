// libraries
import React from 'react'
import styled from 'styled-components'
// components

// custom
import { colors, breakpoints } from '../utility/variables'

const FrontScreenStyled = styled.div`
  background-color: ${colors.secondaryTwo};
  min-height: 300px;
`

const FrontScreen = () => {
  return (
    <FrontScreenStyled>
      <></>
    </FrontScreenStyled>
  )
}

export default FrontScreen
