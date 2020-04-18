// libraries
import React from 'react'
// components
import Page from '../components/utility/Page'
import SEO from '../components/utility/SEO'
import Logo from '../components/common/Logo'
import Banner from '../components/common/Banner'
import Services from '../components/services/Services'
import StepsList from '../components/services/StepsList'
import Mailing from '../components/common/Mailing'
import Footer from '../components/common/Footer'

export default () => {
  return (
    <>
      <SEO title="Наши услуги" />
      <Page>
        <Logo position="absolute" mobile={1} />
        <Banner text="Наши услуги" />
        <Services />
        <StepsList />
        <Mailing />
        <Footer />
      </Page>
    </>
  )
}
