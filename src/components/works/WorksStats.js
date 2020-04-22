// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
//components
import Caption from '../common/Caption'
// utility
import { colors } from '../../utility/variables'

const WorksStats = () => {
  return (
    <Section>
      <Caption
        title="Что мы сделали"
        subtitle="В своем деле мы достигли такой высоты, что небо стало черным и звезды перестали мерцать"
      />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Stat>
              <span style={{ color: colors.primary }}>15+</span>
              <small>Наград</small>
            </Stat>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stat>
              <span style={{ color: colors.secondaryTwo }}>33</span>
              <small>Других наград</small>
            </Stat>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stat>
              <span style={{ color: colors.coral }}>12</span>
              <small>Супер наград</small>
            </Stat>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

const Section = styled.section``

const Stat = styled.div`
  text-align: center;
  padding: 2rem 0;

  & span {
    display: block;
    font-size: 5rem;
    font-weight: 700;
  }

  & small {
    font-size: 1rem;
    color: ${colors.secondaryTwo};
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

export default WorksStats
