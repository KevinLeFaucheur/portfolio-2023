import React from 'react'
import { styled } from 'styled-components'

export const Experience = () => {
  return (    
  <Container>
    <Date>2023</Date>
    <Body>
      <Title></Title>
      <Subtitle></Subtitle>
      <About></About>
      <Technologies></Technologies>
    </Body>
  </Container>
  )
}

const Container = styled.div`
  background-color: #b5b5b5;
  padding: 10px;
  margin: 1rem;
  display: flex;
`

const Date = styled.div`
  background-color: #d6d6d6;
`

const Body = styled.div`
  background-color: #a7a7a7;
  width: 70%;
`

const Title = styled.div`
`

const Subtitle = styled.div`
`

const About = styled.div`
`

const Technologies = styled.div`
`