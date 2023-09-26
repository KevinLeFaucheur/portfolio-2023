import React from 'react'
import { styled } from 'styled-components'
import { Tag } from './Tag'

export const Experience = ({ id, project }) => {
  const { start, end, title, subtitle, about, tech, pictures, link } = project;

  return (    
  <Container id={id}>
    <Date>
      <span>{start}</span>
      <span>{start && end ? '-' : ''}</span>
      <span>{end}</span>
    </Date>
    <Body>
      <a href={link}><Title>{title + ' '}{link && <i class="fa-solid fa-up-right-from-square fa-xs"></i>}</Title></a>
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
  /* background-color: #b5b5b5; */// debug
  border-radius: 15px;
  padding: 10px;
  margin: 1rem;
  display: flex;

  & a:hover{
    text-decoration: underline;
    color: rgba(102, 153, 182, 1);
    transition: all 0.25s ease-in-out;
  }

  &:hover {
    background-color: rgba(0, 0, 0, .05);
    transition: all 0.25s ease-in-out;
  }
`

const Date = styled.div`
  display: flex;
  /* background-color: #d6d6d6; */// debug
  width: 130px;
  padding: 0 10px;
  text-align: ${({align}) => align};
  font-weight: 500;
`

const Body = styled.div`
  /* background-color: #a7a7a7; */ // debug
  width: fit-content;
`

const Title = styled.h3`
  text-align: left;
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