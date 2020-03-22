// libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// custom
import { breakpoints, colors } from '../../utility/variables'

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

const NavListStyled = styled.nav`
  width: 100%;
  transform: translateY(-10%);

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & a {
    position: relative;
    color: ${colors.white};
    text-decoration: none;
    font-size: 1.1rem;
    padding: 1.5rem;
    display: block;

    &:focus {
      outline: none;
    }

    &:hover:before,
    &:focus:before {
      content: '';
      position: absolute;
      height: 2px;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
      width: 55%;
      border-radius: 4px;
      background: ${colors.white};

      @media (${breakpoints.large}) {
        background: ${props =>
          props.front ? colors.white : colors.secondaryTwo};
      }
    }
  }

  @media (${breakpoints.large}) {
    transform: none;

    ul {
      flex-direction: row;
      justify-content: center;
    }
    a {
      padding: 1rem 1.5rem;
      color: ${props => (props.front ? colors.white : colors.secondaryTwo)};
    }
  }
`

export default NavList
