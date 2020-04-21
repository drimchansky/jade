// components
import React from 'react'
import styled from 'styled-components'
// custom
import { colors } from '../../utility/variables'

const ServiceItem = props => {
  return (
    <Item>
      {props.children}
      <IconWrap>{props.icon}</IconWrap>
      <span>{props.title}</span>
      <p>{props.text}</p>
    </Item>
  )
}

const Item = styled.div`
  padding: 0.5rem;

  @media (min-width: 576px) {
    padding: 2rem 0.5rem;
  }

  & span {
    font-weight: 500;
    font-size: 1.3rem;
    display: block;
    margin-top: 1rem;
  }

  & p {
    font-size: 1rem;
    font-weight: 300;
  }
`

const IconWrap = styled.div`
  position: relative;
  background: rgba(246, 16, 103, 0.02);
  padding: 15px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1px solid ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
  }
`

export default ServiceItem
