// libraries
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
// custom
import { colors, breakpoints } from '../utility/variables'

const FrontScreenStyled = styled.div`
  background-color: rgba(21, 4, 51, 0.8);
  min-height: 10px;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;

  @media (${breakpoints.large}) {
    height: 100vh;
  }
`

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
      <FrontScreenStyled></FrontScreenStyled>
    </BackgroundImage>
  )
}

export default FrontScreen
