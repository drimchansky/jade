import React from 'react'
import styled from 'styled-components'

const StyledHamburger = styled.button`
  position: absolute;
  height: 80px;
  width: 100px;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  z-index: 10;
  border: none;
  padding: 0;
  background: none;

  & span {
    height: 10px;
    width: 80px;
    position: absolute;
    border-radius: 50px;
    background-color: black;
    transform: ${props =>
      props.open
        ? 'translate(-50%,-50%) rotate(135deg);'
        : 'translate(-50%, -50%) rotate(0deg)'};
    transition: all ease 0.5s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: inherit;
      border-radius: inherit;
      background-color: inherit;
      margin: auto;
      width: 50%;
      transition: all ease 0.5s;
    }

    &::before {
      ${props => (props.open ? '' : '')};
      top: ${props => (props.open ? '0' : '-20px')};
      left: 0;
      transform: ${props =>
        props.open ? 'translateX(100%) rotate(-90deg);' : ''};
      transform-origin: left;
    }

    &::after {
      bottom: ${props => (props.open ? '0' : '-20px')};
      right: 0;
      transform: ${props =>
        props.open ? 'translateX(-100%) rotate(-90deg);' : ''};
      transform-origin: right;
    }
  }
`

const Hamburger = ({ open, setOpen }) => {
  return (
    <StyledHamburger open={open} onClick={() => setOpen(!open)}>
      <span></span>
    </StyledHamburger>
  )
}

export default Hamburger
