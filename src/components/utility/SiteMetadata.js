import React from 'react'
import { Helmet } from 'react-helmet'

const SiteMetadata = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
      <link
        href="https://fonts.googleapis.com/css?family=M+PLUS+1p:400,700,900&display=swap"
        rel="stylesheet"
      />
      <meta name="theme-color" content="#191919" />
    </Helmet>
  )
}

export default SiteMetadata
