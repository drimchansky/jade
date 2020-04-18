// libraries
import React from 'react'
import { useMatch } from '@reach/router'
// components
import GlobalStyles from './GlobalStyles'
import Header from '../common/Header'

const Page = ({ children }) => {
  const match = useMatch('/')
  return (
    <>
      <GlobalStyles />
      <Header front={match ? 1 : 0} />
      <>{children}</>
    </>
  )
}

export default Page
