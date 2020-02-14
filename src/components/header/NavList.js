import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors, breakpoints } from '../utility/variables'

const NavListStyled = styled.nav`
  width: 100%;
  transform: translateY(-10%);

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
    padding: 1.5rem;
    display: block;
    color: ${colors.white};
  }

  @media (${breakpoints.large}) {
    transform: none;
    margin-left: 20px;

    ul {
      flex-direction: row;
    }
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
