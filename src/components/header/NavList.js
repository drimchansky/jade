import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavListStyled = styled.nav`
  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & li {
  }
  & a {
    text-decoration: none;
    padding: 1rem;
    display: block;
  }
`

const NavList = () => {
  return (
    <NavListStyled>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Work</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </NavListStyled>
  )
}

export default NavList
