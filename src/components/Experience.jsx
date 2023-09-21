import React from 'react'
import { styled } from 'styled-components'
import { Tag } from './Tag'

export const Experience = ({ project }) => {
  const { start, end, title, subtitle, about, tech, pictures } = project;

  return (    
  <Container>
    <Date>
      <span>{start}</span>
      <span>{start && end ? '-' : ''}</span>
      <span>{end}</span>
    </Date>
    <Body>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <About>
        {Array.isArray(about) ? about.map(line => <AboutLine>{line}</AboutLine>) : about}
      </About>
      <Technologies>
        {tech.map(tag => <Tag key={tag} name={tag} />)}
      </Technologies>
      {pictures && pictures.map(picture => <img key={picture.alt} src='' alt='' />)}
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
  display: flex;
  justify-content: space-between;
  background-color: #d6d6d6;
  width: 120px;
  padding: 0 10px;
  text-align: ${({align}) => align};
`

const Body = styled.div`
  background-color: #a7a7a7;
  width: fit-content;
`

const Title = styled.h3`
  margin: 0;
`

const Subtitle = styled.h4`
`

const About = styled.div`
`

const AboutLine = styled.p`
  margin: 0;
`

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`