// libraries
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// components
import Logo from './Logo'
import { Twitter, Facebook, Instagram, Medium, YouTube } from './SVGIcons'
// custom
import { colors } from '../../utility/variables'

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Logo frontPage />

        <List>
          <Title>Меню</Title>

          <ul>
            <li>
              <Link to="/services">Услуги</Link>
            </li>
            <li>
              <Link to="/services">Проекты</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
          </ul>
        </List>

        <Social>
          <Title>Следите за нами</Title>

          <ul>
            <li>
              <a href="/">
                <Twitter fill={colors.white} size="30px" />
              </a>
            </li>
            <li>
              <a href="/">
                <Instagram fill={colors.white} size="30px" />
              </a>
            </li>
            <li>
              <a href="/">
                <Medium fill={colors.white} size="30px" />
              </a>
            </li>
            <li>
              <a href="/">
                <YouTube fill={colors.white} size="30px" />
              </a>
            </li>
            <li>
              <a href="/">
                <Facebook fill={colors.white} size="30px" />
              </a>
            </li>
          </ul>
        </Social>
      </Container>

      <Copy>Powered on Gatsby by DRIMchansky.</Copy>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background: ${colors.secondaryFour};
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 10px;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 576px) {
    margin-left: 2rem;
  }

  & ul {
  }

  & li:first-child {
    margin-top: 1rem;
  }

  & a {
    color: ${colors.white};
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem;
    display: block;
  }
`

const Title = styled.span`
  display: inline-block;
  position: relative;
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${colors.white};
  text-align: center;

  &:before {
    position: absolute;
    content: '';
    width: 90%;
    bottom: -4px;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colors.primary};
  }
`

const Social = styled.div`
  margin-top: 1rem;

  @media (min-width: 576px) {
    margin-top: 0;
    margin-left: auto;
  }

  & ul {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  & li {
  }
`

const Copy = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  color: ${colors.white};
  opacity: 0.9;
`

export default Footer
