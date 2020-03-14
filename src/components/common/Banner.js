// libraries
import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
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
    <BackgroundImage
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <BannerStyled>
        <ContainerStyled>
          <HeaderStyled>{text}</HeaderStyled>
        </ContainerStyled>
      </BannerStyled>
    </BackgroundImage>
  )
}

const BannerStyled = styled.div`
  height: 110px;
  background-color: rgba(58, 4, 117, 0.7);

  @media (${breakpoints.large}) {
    height: 250px;
  }
`

const ContainerStyled = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: flex-end;

  @media (${breakpoints.large}) {
    align-items: center;
  }
`

const HeaderStyled = styled.h2`
  font-size: 1.5rem;
  color: ${colors.white};
  padding-left: 1rem;
  padding-bottom: 0.5rem;

  @media (${breakpoints.large}) {
    font-size: 3rem;
  }
`

export default Banner
