import React from 'react'
import { styled } from 'styled-components'

export const Carousel = ({ pictures }) => {
  return (
    <Wrapper>
      <Arrow className="fa-solid fa-angle-left" />
      <Image />
      <Image />
      <Image />
      <Arrow className="fa-solid fa-angle-right" />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: grey;
  display: flex;
  justify-content: space-between;

`

const Arrow = styled.button`

`

const Image = styled.img`
background-color: aliceblue;
  height: 150px;
  width: 150px;
`