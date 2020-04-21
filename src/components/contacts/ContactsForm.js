// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
// custom
import { colors } from '../../utility/variables'

const ContactsForm = () => {
  return (
    <Form>
      <Title>Свяжитесь с нами</Title>
      <Grid container>
        <Grid item xs="12" md="5">
          <TextField id="name" label="Ваше имя" color="primary" variant="outlined" />
          <TextField
            id="email"
            type="email"
            label="Ваш email"
            variant="outlined"
            color="primary"
            margin="normal"
          />
        </Grid>
        <Grid item xs="12" md="7">
          <TextField
            id="textarea"
            multiline
            label="Ваше сообщение"
            variant="outlined"
            color="primary"
            rows={4}
          />
        </Grid>
      </Grid>
    </Form>
  )
}

const Title = styled.span`
  display: block;
  padding: 0.5rem 0 1rem 0;
  font-size: 1.1rem;
  color: ${colors.secondaryFour};
`

const Form = styled.form`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 0.5rem;

  @media (min-width: 960px) {
    background: ${colors.Three};
  }

  & div {
    width: 100%;
  }

  & input {
    width: 100%;
    color: ${colors.secondaryThree};
  }

  & label {
  }
`

export default ContactsForm
