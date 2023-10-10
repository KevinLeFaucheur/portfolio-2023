import React, { useState } from 'react'
import { styled } from 'styled-components'

export const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let dPictures = ['1', '2', '3', '4'];

  const setImageClassName = (i) => {
    if(i === currentIndex - 1) return 'prev';
    else if(i === currentIndex + 1) return 'next';
    else if(i === currentIndex) return '';
    return 'hidden';
  }

  return (
    <Wrapper>
      <Arrow className="fa-solid fa-angle-left" />
      {dPictures.map((picture, i) => <Image alt={picture} className={setImageClassName(i)} />)}
      <Arrow className="fa-solid fa-angle-right" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgba(170, 224, 255, 0.2);
  display: flex;
  justify-content: space-between;
`

const Arrow = styled.button`
  appearance: none;
  height: 35px;
  width: 35px;
  margin: auto 0;
  border-radius: 10px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(170, 224, 255);
  }
`

const Image = styled.img`
  cursor: pointer;
  background-color: aliceblue;
  height: 150px;
  width: 150px;
  border-radius: 5px;

  &.hidden {
    display: none;
  }

  &.prev, &.next {
    height: 100px;
    width: 50px;
    margin: auto 0;
  }
`