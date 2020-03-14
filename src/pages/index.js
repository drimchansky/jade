// libraries imports
import React from 'react'
// components imports
import Page from '../components/page/Page'
import SEO from '../components/page/SEO'
import FrontScreen from '../components/FrontScreen'

export default () => {
  return (
    <>
      <SEO title="Главная" />
      <Page>
        <FrontScreen />
      </Page>
    </>
  )
}
