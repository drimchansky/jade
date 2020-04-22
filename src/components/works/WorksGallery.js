// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
// components
import WorksItem from './WorksItem'

const WorksGallery = () => {
  const tempData = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, relativeDirectory: { eq: "temp" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)
  const tempImagesArray = tempData.allFile.nodes

  return (
    <Section>
      <Container maxWidth="xl" disableGutters>
        <Grid container component="ul">
          {tempImagesArray.map(item => {
            return (
              <StyledItem key={Math.random()} item component="li" xs={12} sm={6}>
                <WorksItem
                  img={item.childImageSharp.fluid}
                  title="Временный заголовок"
                  description="Временный заголовок"
                />
              </StyledItem>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem 0;
`

const StyledItem = styled(Grid)`
  position: relative;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    mix-blend-mode: multiply;
    opacity: 0.9;
    z-index: 10;
  }

  @media (min-width: 600px) {
    :nth-child(3n) {
      width: 100%;
      max-width: 100%;
      flex-basis: 100%;
    }
  }
`

export default WorksGallery
