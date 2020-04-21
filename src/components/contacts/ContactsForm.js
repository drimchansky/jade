// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// custom
import { colors } from '../../utility/variables'

const ContactsForm = () => {
  return (
    <Form>
      <Title>Свяжитесь с нами</Title>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <TextFieldStyled
            id="name"
            label="Ваше имя"
            color="primary"
            variant="outlined"
            fullWidth
          />
          <TextFieldStyled
            id="email"
            type="email"
            label="Ваш email"
            variant="outlined"
            color="primary"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <TextFieldStyled
            id="textarea"
            multiline
            label="Ваше сообщение"
            variant="outlined"
            color="primary"
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item container xs={12} justify="center">
          <Button color="secondary" size="large" variant="contained">
            Отправить
          </Button>
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

  @media (min-width: 960px) {
    margin-bottom: 1.5rem;
    color: ${colors.white};
  }
`

const Form = styled.form`
  margin: 0 auto;
  padding: 1rem 0.5rem;

  @media (min-width: 960px) {
    padding: 5rem 3.5rem;
    max-width: 1000px;
    background: ${colors.secondaryThree};
  }
`
//  Overwriting MaterialUI styles. IMPORTANT justified
const TextFieldStyled = styled(TextField)`
  & fieldset {
    @media (min-width: 960px) {
      border-color: ${colors.white} !important;
    }
  }

  & label {
    @media (min-width: 960px) {
      color: ${colors.white} !important;
    }
  }

  & textarea,
  & input {
    color: ${colors.secondaryThree};

    @media (min-width: 960px) {
      color: ${colors.white};
    }
  }
`

export default ContactsForm
