// libraries
import React from 'react'
// components
import Page from '../components/page/Page'
import SEO from '../components/page/SEO'
import Logo from '../components/common/Logo'
import Banner from '../components/common/Banner'

export default () => {
  return (
    <>
      <SEO title="Наши контакты" />
      <Page>
        <Logo position="absolute" mobile />
        <Banner text="Связь с нами" image="laptop" />
      </Page>
    </>
  )
}
