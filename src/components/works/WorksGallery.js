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

  console.log(tempData)

  return (
    <Section>
      <div>Work gallery</div>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100px;
`

export default WorksGallery
