// libraries
import React from 'react'
import styled from 'styled-components'
//components
import Phone from '../icons/Phone'
// custom
import { colors, breakpoints } from '../../utility/variables'

const Number = ({ front }) => {
  return (
    <NumberStyled front={front}>
      <Phone front={front} />
      (01) 666 - 693 - 456
    </NumberStyled>
  )
}

const NumberStyled = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-size: 1.2rem;
  padding: 1rem;
  white-space: nowrap;

  @media (${breakpoints.large}) {
    color: ${props => (props.front ? colors.white : colors.secondaryTwo)};
  }
`

export default Number
