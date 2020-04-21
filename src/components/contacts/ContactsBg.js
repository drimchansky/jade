import React from 'react'
import styled from 'styled-components'

const ContactsBg = () => {
  return <BG></BG>
}

const BG = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    background: #000;
    height: 100%;
    height: 1224px;
  }
`

export default ContactsBg
