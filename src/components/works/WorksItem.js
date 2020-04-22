import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from '../../utility/variables'

const WorksItem = ({ img, title, description }) => {
  console.log(img)
  return (
    <StyledItem>
      <StyledImage fluid={img} alt="Work image" />
      <a href="/">
        <span>{title}</span>
        <small>{description}</small>
      </a>
    </StyledItem>
  )
}

const StyledItem = styled.div`
  position: relative;
  height: 30vw;
  overflow: hidden;

  & a {
    position: absolute;
    z-index: 100;
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: ${colors.white};

    & span {
      display: block;
    }

    & {
      small {
      }
    }
  }

  &:hover img,
  &:focus img {
    transform: scale(1.1);
  }
`

const StyledImage = styled(Img)`
  /* Overwriting gatsby-image inline styles */
  position: absolute !important;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  & img {
    /* Overwriting MaterialUI inline styles */
    transition: transform 0.2s !important;
  }
`

export default WorksItem
