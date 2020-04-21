import React from 'react'
import styled from 'styled-components'

import { colors } from '../../utility/variables'

const Caption = ({ title, subtitle, align }) => {
  return (
    <CaptionStyled align={align}>
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </CaptionStyled>
  )
}

const CaptionStyled = styled.div`
  text-align: center;
  padding: 2rem 10px 1rem 10px;
  color: ${colors.secondaryTwo};
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 600px) {
    padding: 3rem 10px 2rem 10px;
    max-width: ${props => (props.align ? '1300px' : '')};
    text-align: ${props => (props.align ? props.align : '')};
  }

  & h2 {
    font-size: 1.8rem;
    font-weight: 500;

    @media (min-width: 960px) {
      font-size: 2.5rem;
    }
  }

  & span {
    font-size: 1rem;
    font-weight: 300;
    display: block;
    margin-top: 0.5rem;
    opacity: 0.9;
  }
`

export default Caption
