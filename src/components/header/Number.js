import React from 'react'
import styled from 'styled-components'

import Phone from '../icons/Phone'

import { colors } from '../../utility/variables'

const NumberStyled = styled.span`
  display: flex;
  align-items: center;
  color: ${props => (props.front ? colors.white : colors.secondaryTwo)};
  font-size: 1.2rem;
  padding: 1rem;
  white-space: nowrap;
`

const Number = ({ front }) => {
  return (
    <NumberStyled front={front}>
      <Phone front={front} />
      (01) 666 - 693 - 456
    </NumberStyled>
  )
}

export default Number
