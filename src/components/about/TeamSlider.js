// libraries
import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'

import { colors } from '../../utility/variables'

export default class TeamSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <Section>
        <Container maxWidth="xl" disableGutters>
          <Slider {...settings}>
            <div>
              <StyledSlide container>
                <Grid item xs={12}>
                  Content 1
                </Grid>
              </StyledSlide>
            </div>
            <div>
              <StyledSlide container>
                <Grid item xs={12}>
                  Content 2
                </Grid>
              </StyledSlide>
            </div>
            <div>
              <StyledSlide container>
                <Grid item xs={12}>
                  Content 3
                </Grid>
              </StyledSlide>
            </div>
            <div>
              <StyledSlide container>
                <Grid item xs={12}>
                  Content 4
                </Grid>
              </StyledSlide>
            </div>
          </Slider>
        </Container>
      </Section>
    )
  }
}

const Section = styled.section`
  padding: 3rem 0;
`

const StyledSlide = styled(Grid)`
  padding: 3rem 0;
`
