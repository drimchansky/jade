// libraries
import React from 'react'
// components
import Page from '../components/page/Page'
import SEO from '../components/page/SEO'
import FrontScreen from '../components/FrontScreen'
import Cards from '../components/Cards'

export default () => {
  return (
    <>
      <SEO title="Главная" />
      <Page>
        <FrontScreen />
        <Cards />
      </Page>
    </>
  )
}
