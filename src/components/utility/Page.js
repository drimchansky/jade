// libraries
import React from 'react'
// components
import GlobalStyles from './GlobalStyles'

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <>{children}</>
    </>
  )
}

export default Page
