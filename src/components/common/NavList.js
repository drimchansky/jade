// libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// custom
import { breakpoints, colors } from '../../utility/variables'

const NavList = ({ frontpage, open, setOpen }) => {
  const clickHandler = e => {
    setOpen(!open)
  }

  return (
    <NavListStyled frontpage={frontpage}>
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
    font-weight: 300;
    padding: 1.5rem;
    display: block;

    &:before {
      content: '';
      position: absolute;
      height: 2px;
      bottom: 2px;
      left: 50%;
      border-radius: 4px;
      transition: width 0.3s ease-in-out, background 0.2s ease-in;
      transform: translateX(-50%);
      width: 0;
      background: transparent;
    }

    &:focus {
      outline: none;
    }

    &:hover:before,
    &:focus:before {
      width: 55%;
      background: ${colors.white};

      @media (${breakpoints.large}) {
        background: ${props => (props.frontpage ? colors.white : colors.secondaryTwo)};
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
      color: ${props => (props.frontpage ? colors.white : colors.secondaryTwo)};
    }
  }
`

export default NavList
