// libraries
import React from 'react'
import styled from 'styled-components'
// components
import { Arrow } from './SVGIcons'
// custom
import { colors } from '../../utility/variables'

const Mailing = () => {
  return (
    <Section>
      <Title>Подпишитесь на нашу рассылку</Title>
      <Subtitle>Оставайтесь в курсе самого важного</Subtitle>
      <WrapperStyled>
        <input type="email" placeholder="ВАШ EMAIL" />
        <button>
          Подписаться
          <span>
            <Arrow fill={colors.primary} size="1.3rem" />
          </span>
        </button>
      </WrapperStyled>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 10px;

  @media (min-width: 992px) {
    padding-bottom: 8rem;
  }
`

const Title = styled.h4`
  text-align: center;
  font-size: 2rem;
  color: ${colors.secondaryThree};
  font-weight: 500;
`

const Subtitle = styled.span`
  font-size: 1rem;
  color: ${colors.secondaryTwo};
  margin-top: 1rem;
  text-align: center;
  font-weight: 400;

  @media (min-width: 576px) {
    margin-top: 1.5rem;
  }
`

const WrapperStyled = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 576px) {
    border-bottom: 2px solid ${colors.lightGrey};
    flex-direction: row;
    height: 54px;
    margin-top: 2rem;
  }

  & input {
    color: ${colors.secondaryThree};
    font-weight: bold;
    font-size: 1.1rem;
    padding: 10px;
    border: 2px solid ${colors.lightGrey};

    @media (min-width: 576px) {
      height: 100%;
      padding: 0;
      padding-left: 10px;
      padding-right: 10px;
      border: none;
    }

    &::placeholder {
      color: gray;
      font-weight: 300;
    }
  }

  & button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    color: ${colors.primary};
    border: none;
    border-bottom: 2px solid ${colors.lightGrey};
    transition: all 0.3s;
    background: linear-gradient(180deg, rgba(242, 242, 242, 0.5) 0%, rgba(255, 255, 255, 0) 100%);

    &:hover,
    &:focus {
      background: linear-gradient(180deg, rgba(242, 242, 242, 0.8) 100%, rgba(255, 255, 255, 0) 0%);
    }

    @media (min-width: 576px) {
      margin: 0;
      height: 100%;
      border: none;
    }
  }

  & span {
    border: 2px solid ${colors.primary};
    border-radius: 50%;
    height: 1.8rem;
    width: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    @media (min-width: 576px) {
      margin-left: 1rem;
    }
  }
`

export default Mailing
