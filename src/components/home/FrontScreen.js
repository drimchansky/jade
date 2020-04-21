// libraries
import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
//components
import Header from '../common/Header'
import arrow from '../../assets/icons/next.png'
// custom
import { breakpoints, colors } from '../../utility/variables'

const FrontScreen = () => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulGeneral {
        nodes {
          frontBgImage {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          frontHeader {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  `)
  const imageData = contentfulData.allContentfulGeneral.nodes[0].frontBgImage.fluid

  const createHeader = () => {
    const header =
      contentfulData.allContentfulGeneral.nodes[0].frontHeader.content[0].content[0].value
    return { __html: header }
  }

  return (
    <BackgroundImage Tag="section" fluid={imageData} backgroundColor={`rgba(37, 3, 74, 0.8)`}>
      <FrontScreenStyled>
        <ContainerStyled>
          <Header frontpage="true" />
          <HeaderStyled dangerouslySetInnerHTML={createHeader()}></HeaderStyled>
          <LinkStyled to="/contacts">Свяжитесь с нами</LinkStyled>
        </ContainerStyled>
      </FrontScreenStyled>
    </BackgroundImage>
  )
}

const FrontScreenStyled = styled.div`
  background-color: rgba(37, 3, 74, 0.8);
  min-height: 10px;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  height: 100vh;
  /* fix for chrome later */

  @media (${breakpoints.large}) {
    height: 100vh;
  }
`

const ContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 0.5rem;
  font-size: 1.2rem;
`

const HeaderStyled = styled.h1`
  font-size: 9vw;
  color: ${colors.white};
  transform: translateY(30%);
  line-height: 1.3;
  font-weight: 500;

  @media (${breakpoints.large}) {
    transform: translateY(15%);
    font-size: 7vw;
  }

  & span {
    color: ${colors.primary};
  }
`

const LinkStyled = styled(Link)`
  transform: translateY(30%);
  text-align: right;
  position: relative;
  font-size: 1rem;
  font-weight: 300;
  color: ${colors.white};
  text-decoration: none;
  margin-top: 3rem;
  padding: 2.5rem;
  padding-left: 0;
  padding-right: 5.5rem;
  margin-right: 20%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: -1000px;
    border: 1px solid ${colors.white};
  }

  &:after {
    content: '';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    height: 2rem;
    width: 2rem;
    border: 1px solid ${colors.white};
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 30px;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.8rem;
    text-align: center;
    background: url(${arrow}) no-repeat;
    background-size: 40%;
    background-position: center center;
  }

  &:focus {
    outline: none;
  }

  @media (${breakpoints.large}) {
    transform: translateY(15%);
    margin-right: 40%;
    margin-top: 4rem;
  }
`

export default FrontScreen
