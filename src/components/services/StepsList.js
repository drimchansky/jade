// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
// components
import Caption from '../common/Caption'
import StepsItem from './StepsItem'

const StepsList = () => {
  //
  // Temporary data untill integrate CMS
  //
  const data = [
    {
      id: 1,
      title: 'Это очень удобный инструмент для моделей (макетов).',
      text:
        'Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном.',
    },
    {
      id: 2,
      title: 'Это очень удобный инструмент для моделей (макетов).',
      text:
        'Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном.',
    },
    {
      id: 3,
      title: 'Это очень удобный инструмент для моделей (макетов).',
      text:
        'Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном.',
    },
  ]

  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "laptop-w.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageDataSrc = imageData.file.childImageSharp.fluid

  return (
    <StyledContainer disableGutters maxWidth="xl">
      <Grid container>
        <Grid item xs={12}>
          <Caption
            title="Процесс"
            subtitle="Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном."
          />
        </Grid>
        <Grid item container component="ul" style={{ paddingBottom: '2rem' }}>
          {data.map(item => {
            return (
              <StyledItem key={item.id} item component="li" xs={12}>
                <StepsItem
                  key={item.id}
                  img={imageDataSrc}
                  id={item.id}
                  title={item.title}
                  text={item.text}
                />
              </StyledItem>
            )
          })}
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)``

const StyledItem = styled(Grid)`
  &:nth-child(odd) article {
    flex-direction: row-reverse;
  }
`

export default StepsList
