// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
// components
import TeamItem from './TeamItem'

const Team = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <TeamItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamItem />
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100px;
`

export default Team
