// libraries
import React from 'react'
// components
import Page from '../components/utility/Page'
import Logo from '../components/common/Logo'
import Header from '../components/common/Header'
import SEO from '../components/utility/SEO'
import Banner from '../components/common/Banner'
import Contacts from '../components/contacts/Contacts'

export default () => {
  return (
    <>
      <SEO title="Наши контакты" />
      <Page>
        <Logo position="absolute" mobile="true" />
        <Header />
        <Banner text="Связь с нами" image="laptop" />
        <Contacts />
      </Page>
    </>
  )
}
