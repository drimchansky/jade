import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet title={`${data.site.siteMetadata.title} | ${title}`}>
      <html lang="ru" />
      <meta name="theme-color" content="#191919" />
    </Helmet>
  )
}

export default SEO
