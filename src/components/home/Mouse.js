import React from 'react'
import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
`

const Mouse = () => {
  return (
    <MouseStyled>
      <div>
        <div></div>
      </div>
    </MouseStyled>
  )
}

const MouseStyled = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 34px;
  height: 55px;

  & > div {
    width: 3px;
    padding: 10px 15px;
    height: 35px;
    border: 2px solid #fff;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
  }

  & > * > div {
    width: 3px;
    height: 10px;
    border-radius: 25%;
    background-color: #fff;
    animation-name: ${scroll};
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }
`

export default Mouse
