// libraries
import React from 'react'
import styled from 'styled-components'
// custom
import { colors } from '../../utility/variables'

const Cards = () => {
  return (
    <CardsStyled>
      <h2>
        Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии и
        много чего ещё.
      </h2>
      <ul>
        <li>
          <small>01</small>
          <span>Исследование</span>
          <p>
            Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей
            (макетов).
          </p>
        </li>
        <li>
          <small>02</small>
          <span>Реклама</span>
          <p>
            Он помогает выделить визуальные элементы в документе или презентации, например текст,
            шрифт или разметка.
          </p>
        </li>
        <li>
          <small>03</small>
          <span>Результат</span>
          <p>
            Lorem ipsum по большей части является элементом латинского текста классического автора и
            философа Цицерона.
          </p>
        </li>
      </ul>
    </CardsStyled>
  )
}

const CardsStyled = styled.div`
  max-width: 1300px;
  padding: 3rem 0.5rem;
  margin: 0 auto;
  color: ${colors.secondaryThree};

  @media (min-width: 768px) {
    padding: 8rem 0.5rem;
  }

  & h2 {
    color: ${colors.secondaryThree};
    font-size: 1.3rem;
    word-wrap: wrap;
    max-width: 850px;

    @media (min-width: 982px) {
      font-size: 2rem;
    }
  }

  & ul {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 768px) {
      margin-top: 3rem;
      flex-direction: row;
      align-items: stretch;
    }
  }

  & li {
    padding: 3rem 2rem;
    width: auto;
    max-width: 350px;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    flex: 1;
    border-radius: 4px;

    @media (min-width: 768px) {
      padding: 2rem 1rem;

      & * {
        transition: color 0.2s;
      }

      &:hover {
        box-shadow: 5px 20px 50px rgba(102, 51, 153, 0.2);
      }

      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }

    @media (min-width: 1000px) {
      padding: 3rem 2rem;
    }
  }

  & small {
    color: ${colors.primary};
    font-size: 0.8rem;
    font-weight: bold;
  }

  & span {
    font-weight: bold;
    font-size: 1.3rem;
    margin-top: 1rem;
  }

  & p {
    font-size: 1rem;
  }
`

export default Cards
