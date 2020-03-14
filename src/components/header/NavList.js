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

const NavList = ({ front, open, setOpen }) => {
  const clickHandler = e => {
    setOpen(!open)
  }

  return (
    <NavListStyled front={front}>
      <ul>
        <li>
          <Link to="/" onClick={clickHandler}>
            Главнвя
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={clickHandler}>
            Услуги
          </Link>
        </li>
        <li>
          <Link to="/works" onClick={clickHandler}>
            Работы
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={clickHandler}>
            О нас
          </Link>
        </li>
      </ul>
    </NavListStyled>
  )
}

export default NavList
