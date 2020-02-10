import React from 'react'
import styled from 'styled-components'

import Phone from '../images/Phone'

const NumberStyled = styled.span`
  display: flex;
  align-items: center;
`

const Number = () => {
  return (
    <NumberStyled>
      <Phone />
      (01) 666 - 693 - 456
    </NumberStyled>
  )
}

export default Number
