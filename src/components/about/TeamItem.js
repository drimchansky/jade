// libraries
import React from 'react'
import styled from 'styled-components'
// components
import { Codepen, Twitter, Dribble } from '../common/SVGIcons'
// custom
import { colors } from '../../utility/variables'

const TeamItem = ({ img, name, position }) => {
  return (
    <ItemStyled>
      <ImgWrap>
        <img src={img} alt="Avatar" />
      </ImgWrap>
      <Info>
        <span>{name}</span>
        <small>{position}</small>
      </Info>
      <Social>
        <li>
          <a href="/">
            <Twitter fill="#00A8F0" size="24px" />
          </a>
        </li>
        <li>
          <a href="/">
            <Dribble fill="#F61067" size="24px" />
          </a>
        </li>
        <li>
          <a href="/">
            <Codepen size="24px" />
          </a>
        </li>
      </Social>
    </ItemStyled>
  )
}

const ImgWrap = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;

  & img {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
  }
`

const ItemStyled = styled.div`
  max-width: 350px;
  margin: 0 auto;
`

const Info = styled.div`
  color: ${colors.secondaryTwo};
  text-align: center;
  margin-top: 0.5rem;

  @media (min-width: 960px) {
    color: ${colors.white};
  }

  & > span {
    display: block;
    font-weight: bold;
    font-size: 1.3rem;
  }

  & > small {
    display: block;
    font-size: 1rem;
    opacity: 0.9;
    margin-top: 0.5rem;
  }
`

const Social = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  & li:last-child {
    svg {
      fill: ${colors.secondaryFour};

      @media (min-width: 960px) {
        fill: ${colors.white};
      }
    }
  }

  & a {
    padding: 1rem;
  }
`

export default TeamItem
