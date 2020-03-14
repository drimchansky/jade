// libraries
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
//components
import Logo from './common/Logo'
// custom
import { breakpoints, colors } from '../utility/variables'

const FrontScreen = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "plant.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <FrontScreenStyled>
        <ContainerStyled>
          <Logo position="absolute" mobile />
          <HeaderStyled>
            Мы создаем <br />
            <span>успешные проекты</span>
          </HeaderStyled>
          <LinkStyled to="/contacts">Свяжитесь с нами</LinkStyled>
        </ContainerStyled>
      </FrontScreenStyled>
    </BackgroundImage>
  )
}

const FrontScreenStyled = styled.div`
  background-color: rgba(58, 4, 117, 0.83);
  min-height: 10px;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 100vh;
  /* fix for chrome later */

  @media (${breakpoints.large}) {
    height: 100vh;
  }
`

const ContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 0.5rem;
  font-size: 1.2rem;
`

const HeaderStyled = styled.h1`
  font-size: 9vw;
  color: ${colors.white};
  transform: translateY(30%);
  line-height: 1.3;

  @media (${breakpoints.large}) {
    transform: translateY(15%);
    font-size: 7vw;
  }

  & span {
    color: ${colors.primary};
  }
`

const LinkStyled = styled(Link)`
  transform: translateY(30%);
  text-align: right;
  position: relative;
  font-size: 1rem;
  color: ${colors.white};
  text-decoration: none;
  margin-top: 3rem;
  padding: 2.5rem;
  padding-left: 0;
  padding-right: 5.5rem;
  margin-right: 20%;

  &:focus {
    outline: none;
  }

  &:hover:after,
  &:focus:after {
    background: ${colors.white};
    color: ${colors.secondaryFour};
  }

  @media (${breakpoints.large}) {
    transform: translateY(15%);
    margin-right: 40%;
    margin-top: 4rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: -1000px;
    border: 0.5px solid ${colors.white};
  }

  &:after {
    content: '→';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    height: 2rem;
    width: 2rem;
    border: 1px solid ${colors.white};
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 30px;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.8rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.1);
  }
`

export default FrontScreen
