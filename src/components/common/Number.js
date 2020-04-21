// libraries
import React from 'react'
import styled from 'styled-components'
//components
import { Phone } from './SVGIcons'
// custom
import { colors, breakpoints } from '../../utility/variables'

const Number = ({ frontpage }) => {
  return (
    <NumberStyled frontpage={frontpage}>
      <Phone size="26px" fill={frontpage ? colors.white : colors.secondaryTwo} />
      (01) 666 - 693 - 456
    </NumberStyled>
  )
}

const NumberStyled = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 300;
  padding: 1rem;
  white-space: nowrap;

  @media (${breakpoints.large}) {
    color: ${props => (props.frontPage ? colors.white : colors.secondaryTwo)};
  }
`

export default Number
