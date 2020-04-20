// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
// components
import TeamItem from './TeamItem'
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
        <Title>
          <h2>Наша команда</h2>
          <span>
            Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в
            сказанном.
          </span>
        </Title>
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
  }
`

const Title = styled.div`
  text-align: center;
  padding: 2rem 0 1rem 0;
  color: ${colors.secondaryTwo};
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 600px) {
    padding: 3rem 0 2rem 0;
  }

  & h2 {
    font-size: 1.8rem;

    @media (min-width: 960px) {
      font-size: 2.5rem;
    }
  }

  & span {
    font-size: 1rem;
    display: block;
    margin-top: 0.5rem;
    opacity: 0.9;
  }
`

const GridStyled = styled(Grid)`
  padding: 2rem 0 1rem 0;
`

export default Team
