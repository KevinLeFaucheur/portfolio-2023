import React from 'react'
import { styled } from 'styled-components'

export const CarouselImage = ({ picture, index }) => {
  // const setImageClassName = (i) => {
  //   if(i === currentIndex - 1) return 'prev';
  //   else if(i === currentIndex + 1) return 'next';
  //   else if(i === currentIndex) return '';
  //   return 'hidden';
  // }

  return (
    <Button>
      {/* <Image alt={picture} className={setImageClassName(index)} direction={direction} /> */}
    </Button>
  )
}

const Button = styled.button`

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
    transform: translateX(${({ direction }) => Number(-direction) * 50 + '%'});
    transition: all 0.4s ease-in-out;
  }

  /* @keyframes slide {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
    }
  } */
`