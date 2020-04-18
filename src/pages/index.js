// libraries
import React from 'react'
// components
import Page from '../components/utility/Page'
import Logo from '../components/common/Logo'
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
        <Logo position="absolute" mobile="true" />
        <FrontScreen />
        <Cards />
        <Mailing />
        <Footer />
      </Page>
    </>
  )
}
