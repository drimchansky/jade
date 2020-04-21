import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
// custom
import { colors } from '../../utility/variables'

const ContactsBg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact-bg.jpg" }) {
        name
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  const imageData = data.file.childImageSharp.fluid
  return (
    <BG Tag="section" fluid={imageData}>
      <Overflow />
    </BG>
  )
}

const BG = styled(BackgroundImage)`
  display: none;

  @media (min-width: 960px) {
    display: block;
    background: #000;
    height: 100%;
    height: 1224px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`

const Overflow = styled.div`
  mix-blend-mode: multiply;
  height: 100%;
  width: 100%;
  background: ${colors.primary};
  opacity: 1;
`

export default ContactsBg
