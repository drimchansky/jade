// libraries
import React from 'react'
import styled from 'styled-components'
import PlaceIcon from '@material-ui/icons/Place'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
// custom
import { colors } from '../../utility/variables'

const ContactsInfo = () => {
  return (
    <Info>
      <ul>
        <li>
          <PlaceIcon />
          <span>Наш офис</span>
          <small>г. Котлас, Россия</small>
        </li>
        <li>
          <MailOutlineIcon />
          <span>example@gmail.com</span>
        </li>
        <li>
          <PhoneIphoneIcon />
          <span>(01) 666 - 693 - 456</span>
        </li>
      </ul>
    </Info>
  )
}

const Info = styled.div`
  color: ${colors.secondaryThree};
  padding: 2rem;
  padding-left: 3rem;

  @media (min-width: 960px) {
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  & ul {
    @media (min-width: 960px) {
      margin-top: 5rem;
    }
  }

  & li {
    position: relative;
    margin-top: 1rem;

    @media (min-width: 960px) {
      margin-top: 2rem;
    }
  }

  & span {
    font-weight: 400;
    display: block;
    font-size: 1.1rem;
    margin-bottom: 0.3rem;

    @media (min-width: 960px) {
      margin-bottom: 1rem;
    }
  }

  & small {
    font-weight: 300;
    font-size: 1rem;
    opacity: 0.8;
  }

  & svg {
    position: absolute;
    left: -2rem;
    top: -0.2rem;
    fill: ${colors.secondaryTwo};

    @media (min-width: 960px) {
      fill: ${colors.primary};
    }
  }
`

export default ContactsInfo
