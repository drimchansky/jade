// libraries
import React from 'react'
// components
import Page from '../components/utility/Page'
import SEO from '../components/utility/SEO'
import FrontScreen from '../components/home/FrontScreen'
import Cards from '../components/home/Cards'
import Mailing from '../components/common/Mailing'
import Footer from '../components/common/Footer'

export default () => {
  return (
    <>
      <SEO title="Главная" />
      <Page>
        <FrontScreen />
        <Cards />
        <Mailing />
        <Footer />
      </Page>
    </>
  )
}
