import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { Tag } from './Tag'
import { TagContext } from '../App';
import { Carousel } from './Carousel';

export const Experience = ({ id, project, display, index }) => {
  const { start, end, title, subtitle, about, tech, pictures, link } = project;
  const { tags } = useContext(TagContext);

  return (    
  <Container id={id} className={display ? 'active' : 'hidden'} $delay={index} >
    <Date>
      <span>{start}</span>
      <span>{start && end ? '-' : ''}</span>
      <span>{end}</span>
    </Date>
    <Body>
      <a href={link}><Title>{title + ' '}{link && <i className="fa-solid fa-up-right-from-square fa-xs"></i>}</Title></a>
      <Subtitle>{subtitle}</Subtitle>
      <About>
        {Array.isArray(about) ? about.map((line, i) => <AboutLine key={i}>{line}</AboutLine>) : about}
      </About>
      <Technologies>
        {tech.map(tag => <Tag key={tag} name={tag} isSelected={tags.includes(tag)} />)}
      </Technologies>
      <Carousel pictures={pictures} />
    </Body>
  </Container>
  )
}

const Container = styled.div`
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
    background-color: rgba(74, 185, 236, .05);
    transition: all 0.25s ease-in-out;
  }

  &.active {
    animation: activate 250ms ease-in-out both;
    animation-delay: ${({ $delay }) => parseInt($delay) * 100 + 'ms'};
  }

  &.hidden {
    animation: deactivate 400ms ease-in-out both;
  }

  @keyframes activate {
    0% {
        display: flex;
        opacity: 0;
        transform: translateY(100%);
    }

    100% {
        opacity: 1;
    }
  }

  @keyframes deactivate {
    0% {
        opacity: 1;
        height: 300px;
        overflow-y: hidden;
    }

    100% {
        opacity: 0;
        display: none;
        height: 0px;
        transform: translateX(100%);
    }
  }
`

const Date = styled.div`
  display: flex;
  width: 130px;
  padding: 0 10px;
  text-align: ${({align}) => align};
  font-weight: 500;
`

const Body = styled.div`
  width: fit-content;
`

const Title = styled.h3`
  text-align: left;
  margin: 0;

  &:hover {
    color: rgba(74, 185, 236, 1);
    transition: all .25s ease-out;
  }
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