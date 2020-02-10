import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors, breakpoints } from '../utility/variables'

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
    font-size: 1.3rem;
    padding: 1rem;
    display: block;
    color: ${colors.white};
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
          <Link to="/about">About</Link>
        </li>
      </ul>
    </NavListStyled>
  )
}

export default NavList
