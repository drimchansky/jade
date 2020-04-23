// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
// components
import TeamItem from './TeamItem'
import Caption from '../common/Caption'
// custom
import { colors } from '../../utility/variables'

const Team = () => {
  // temporary data
  const data = [
    { img: 'https://joeschmoe.io/api/v1/james', name: 'John', position: 'Designer' },
    { img: 'https://joeschmoe.io/api/v1/jane', name: 'John', position: 'Designer' },
    { img: 'https://joeschmoe.io/api/v1/julie', name: 'John', position: 'Designer' },
    { img: 'https://joeschmoe.io/api/v1/jake', name: 'John', position: 'Designer' },
    { img: 'https://joeschmoe.io/api/v1/josephine', name: 'John', position: 'Designer' },
    { img: 'https://joeschmoe.io/api/v1/jean', name: 'John', position: 'Designer' },
  ]

  return (
    <Section>
      <Container maxWidth="lg">
        <Caption
          title="Наша команда"
          subtitle="Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в
            сказанном."
        />
        <GridStyled container spacing={5}>
          {data.map(item => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <TeamItem img={item.img} name={item.name} position={item.position} />
              </Grid>
            )
          })}
        </GridStyled>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  @media (min-width: 960px) {
    background: linear-gradient(0deg, ${colors.secondaryFour} 67%, #fff 0);
    padding-bottom: 10rem;
  }
`

const GridStyled = styled(Grid)`
  padding: 2rem 0 1rem 0;
`

export default Team
