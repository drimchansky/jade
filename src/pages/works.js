// libraries
import React from 'react'
// components
import Page from '../components/utility/Page'
import SEO from '../components/utility/SEO'
import Logo from '../components/common/Logo'
import Banner from '../components/common/Banner'
import WorksStats from '../components/works/WorksStats'
import WorksGallery from '../components/works/WorksGallery'
import Mailing from '../components/common/Mailing'
import Footer from '../components/common/Footer'

export default () => {
  return (
    <>
      <SEO title="Наши работы" />
      <Page>
        <Logo position="absolute" mobile={1} />
        <Banner text="Наши работы" />
        <WorksStats />
        <WorksGallery />
        <Mailing />
        <Footer />
      </Page>
    </>
  )
}
