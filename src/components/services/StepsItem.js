import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import Img from 'gatsby-image'

import { colors } from '../../utility/variables'

const StepsItem = ({ id, img, title, text }) => {
  return (
    <StyledItem container spacing={5} component="article">
      <StyledContentWrapper item xs={12} sm={6}>
        <small>{id}</small>
        <span>{title}</span>
        <p>{text}</p>
      </StyledContentWrapper>

      <Grid item xs={12} sm={6}>
        <Img fluid={img} />
      </Grid>
    </StyledItem>
  )
}

const StyledItem = styled(Grid)`
  padding: 0 10px;

  @media (min-width: 600px) {
    padding: 0;
  }
`

const StyledContentWrapper = styled(Grid)`
  color: ${colors.secondaryThree};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  /* Overwriting MaterialUI inline Grid styles */
  padding-bottom: 0 !important;

  @media (min-width: 600px) {
    justify-content: flex-start;
    /* Overwriting MaterialUI inline Grid styles */
    padding: 8vw !important;
  }

  & small {
    font-size: 1rem;
    color: ${colors.primary};
    font-weight: 700;
  }

  & span {
    font-size: 1.3rem;
    margin-top: 0.5rem;
  }

  & p {
    font-size: 1rem;
    font-weight: 300;
    opacity: 0.9;
  }
`

export default StepsItem
