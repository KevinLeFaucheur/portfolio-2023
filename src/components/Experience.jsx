import React from 'react'
import { styled } from 'styled-components'
import { Tag } from './Tag'

export const Experience = ({ project }) => {
  const { start, end, title, subtitle, about, tech, pictures } = project;

  return (    
  <Container>
    <Date>{start}-{end}</Date>
    <Body>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <About>{about}</About>
      <Technologies>
        {tech.map(tag => <Tag name={tag} />)}
      </Technologies>
      {pictures && pictures.map(picture => <img src='' alt='' />)}
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
  width: 120px;
`

const Body = styled.div`
  background-color: #a7a7a7;
  width: fit-content;
`

const Title = styled.h3`
`

const Subtitle = styled.h4`
`

const About = styled.div`
`

const Technologies = styled.div`
  display: flex;
  padding: 10px;
`