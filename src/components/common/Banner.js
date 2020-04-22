// libraries
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Container } from '@material-ui/core'
// custom
import { colors, breakpoints } from '../../utility/variables'

const Banner = ({ text }) => {
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
    <BackgroundImage Tag="section" fluid={imageData} backgroundColor={`rgba(37, 3, 74, 0.8)`}>
      <BannerStyled>
        <Container>
          <HeaderStyled>{text}</HeaderStyled>
        </Container>
      </BannerStyled>
    </BackgroundImage>
  )
}

const BannerStyled = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${colors.secondaryOne};
    mix-blend-mode: multiply;
    z-index: -1;
  }
`

const HeaderStyled = styled.h2`
  font-size: 1.5rem;
  color: ${colors.white};
  font-weight: 500;
  padding: 4rem 0 1rem 1rem;

  @media (${breakpoints.large}) {
    font-size: 3rem;
    padding: 2rem 0 2rem 1rem;
  }
`

export default Banner
