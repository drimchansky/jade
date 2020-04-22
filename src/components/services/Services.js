// libraries
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
// components
import Caption from '../common/Caption'
import ServiceItem from './ServiceItem'

import { Promotion, Programming, Design } from '../common/SVGIcons'

const Services = () => {
  const data = [
    {
      icon: <Design />,
      title: 'Дизайн',
      text:
        'Лучшие дизайнеры совместно с маркетологами разработают понятный и интуитивный для всех пользователей интерфейс',
    },
    {
      icon: <Programming />,
      title: 'Программирование',
      text: 'Наши разработчики в кротчайший сроки создадут продукт высочайшего качества',
    },
    {
      icon: <Promotion />,
      title: 'Реклама',
      text: 'Возьмем на себя все тягоры работы с рекламодателями и от правим ваш бизнес в космос',
    },
  ]

  return (
    <Section>
      <Caption
        title="Чем мы занимаемся"
        subtitle="В своем деле мы достигли такой высоты, что небо стало черным и звезды перестали мерцать"
        align="left"
      />

      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {data.map(item => {
            return (
              <Grid key={item.title} item xs={12} sm={6} md={4}>
                <ServiceItem
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                ></ServiceItem>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem 0;
`

export default Services
