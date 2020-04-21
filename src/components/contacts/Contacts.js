// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
// components
import ContactsForm from './ContactsForm'
import ContactsInfo from './ContactsInfo'
import ContactsBg from './ContactsBg'

const Contacts = () => {
  return (
    <Section>
      <Container maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item xs={12} md={5}>
            <ContactsInfo />
          </Grid>
          <Grid item md={7}>
            <ContactsBg />
          </Grid>
        </Grid>
        <ContactsForm />
      </Container>
    </Section>
  )
}

const Section = styled.section``

export default Contacts
