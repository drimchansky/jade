// libraries
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'

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
  background-color: rgba(21, 4, 51, 0.83);
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

  @media (${breakpoints.large}) {
    transform: translateY(0);
    font-size: 7vw;
  }

  & span {
    color: ${colors.primary};
  }
`

const LinkStyled = styled(Link)`
  transform: translateY(30%);
  font-size: 1rem;
  color: ${colors.white};
  text-decoration: none;
  margin-top: 1rem;
  padding: 2rem;
  padding-left: 0;

  @media (${breakpoints.large}) {
    transform: translateY(0);
  }
`

export default FrontScreen
