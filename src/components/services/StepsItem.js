import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import Img from 'gatsby-image'

const StepsItem = ({ id, img, title, text }) => {
  return (
    <Item container spacing={5} component="article">
      <Grid item xs={12}></Grid>
      <Grid item xs={12} sm={6}>
        <Img fluid={img} />
      </Grid>
    </Item>
  )
}

const Item = styled(Grid)``

export default StepsItem
