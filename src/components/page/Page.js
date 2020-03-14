// libraries
import React from 'react'
import { useMatch } from '@reach/router'
// components
import GlobalStyles from './GlobalStyles'
import Header from '../header/Header'

const Page = ({ children }) => {
  const match = useMatch('/')
  return (
    <>
      <GlobalStyles />
      <Header front={match ? true : false} />
      <>{children}</>
    </>
  )
}

export default Page
