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
  height: 35vw;
  overflow: hidden;
  display: flex;
  align-items: flex-start;

  @media (min-width: 900px) {
    height: 45vw;
  }

  & a {
    position: relative;
    z-index: 100;
    display: block;
    text-decoration: none;
    color: ${colors.white};
    padding: 1rem;

    @media (min-width: 900px) {
      padding: 3rem 5rem;
    }

    & span {
      display: block;
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    & {
      small {
        font-weight: 500;
        opacity: 0.9;
        font-size: 1.1rem;
      }
    }
  }

  &:hover img,
  &:focus img {
    transform: scale(1.05);
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
