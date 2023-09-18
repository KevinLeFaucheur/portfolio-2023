import React from 'react'
import { styled } from 'styled-components'
import { Tag } from './Tag'

export const Experience = () => {
  return (    
  <Container>
    <Date>2023</Date>
    <Body>
      <Title>Développeur JavaScript React</Title>
      <Subtitle>OpenClassrooms</Subtitle>
      <About>
        Vous travaillez pour le département technologique d'une grande société financière, 
        WealthHealth. Cette société utilise une application web interne, appelée HRnet, 
        qui gère les dossiers des employés. L'application est ancienne et utilise jQuery 
        côté front end, ce qui entraîne des bugs considérables et une augmentation des 
        plaintes en interne. Votre équipe de développement s'efforce depuis un certain 
        temps déjà de mettre à niveau l'application.
      </About>
      <Technologies>
        <Tag name='React' />
        <Tag name='JavaScript' />
        <Tag name='Redux' />
        <Tag name='Sass' />
      </Technologies>
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