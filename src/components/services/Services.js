// libraries
import React from 'react'
import styled from 'styled-components'
// components
import Caption from '../common/Caption'

const Services = () => {
  return (
    <Section>
      <Caption
        title="Чем мы занимаемся"
        subtitle="В своем деле мы достигли такой высоты, что небо стало черным и звезды перестали мерцать"
        align="left"
      />
      <div>Services</div>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100px;
`

export default Services
