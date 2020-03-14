// libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// custom
import { breakpoints, colors } from '../../utility/variables'

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
    color: ${colors.white};
    text-decoration: none;
    font-size: 1.3rem;
    padding: 1.5rem;
    display: block;
  }
  @media (${breakpoints.large}) {
    transform: none;
    margin-left: 20px;
    ul {
      flex-direction: row;
    }
    a {
      color: ${props => (props.front ? colors.white : colors.secondaryTwo)};
    }
  }
`

const NavList = ({ front }) => {
  return (
    <NavListStyled front={front}>
      <ul>
        <li>
          <Link to="/">Главнвя</Link>
        </li>
        <li>
          <Link to="/services">Услуги</Link>
        </li>
        <li>
          <Link to="/works">Работы</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
      </ul>
    </NavListStyled>
  )
}

export default NavList
