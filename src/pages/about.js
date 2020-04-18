// libraries
import React from 'react'
// components
import Page from '../components/utility/Page'
import Header from '../components/common/Header'
import SEO from '../components/utility/SEO'
import Logo from '../components/common/Logo'
import Banner from '../components/common/Banner'
import Team from '../components/about/Team'
import TeamSlider from '../components/about/TeamSlider'
import Mailing from '../components/common/Mailing'
import Footer from '../components/common/Footer'

export default () => {
  return (
    <>
      <SEO title="О нас" />
      <Page>
        <Logo position="absolute" mobile="true" />
        <Header />
        <Banner text="О нас" />
        <Team />
        <TeamSlider />
        <Mailing />
        <Footer />
      </Page>
    </>
  )
}
