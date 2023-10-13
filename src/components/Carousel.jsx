import React, { useRef, useState } from 'react'
import { styled } from 'styled-components'
import ohmyfood from '../assets/pictures/project/ohmyfood1.png'

export const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dialogRef = useRef();

  let dPictures = ['1', '2', '3', '4'];

  const setImageClassName = (i) => {
    if(i === currentIndex - 1) return 'prev';
    else if(i === currentIndex + 1) return 'next';
    else if(i === currentIndex) return '';
    return 'hidden';
  }

  const handleClickArrow = (n) => {
    if(n === -1 && currentIndex > 0) setCurrentIndex(currentIndex + n);
    if(n === 1 && currentIndex < dPictures.length-1) setCurrentIndex(currentIndex + n);
    setDirection(n);
  } 

  return (
    <Wrapper>
      <Arrow className="fa-solid fa-angle-left" onClick={() => handleClickArrow(-1)} />
      {dPictures.map((picture, i) => <Image key={i} onClick={() => dialogRef.current.showModal()} type="image" src="" alt={picture} className={setImageClassName(i)} direction={direction} />)}
      <Arrow className="fa-solid fa-angle-right" onClick={() => handleClickArrow(1)} />
      <Dialog ref={dialogRef}>
        <DialogImage src={ohmyfood} />
        <Close onClick={() => dialogRef.current.close()}>x</Close>
      </Dialog>
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

const Image = styled.input`
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

const Dialog = styled.dialog`
  position: relative;
  padding: 0;
  background: none;
  border: none;
  overflow: visible;
`

const DialogImage = styled.img`
  max-width: 1280px;
  border-radius: 5px;
  background-color: aliceblue;
  src: ${({ src }) => src};
`

const Close = styled.button`
  position: absolute;
  background-color: transparent;
  color: black;
  top: -15px;
  right: -15px;
  z-index: 10;
  border-radius: 50%;
  border: 2px solid black;
  font-size: 1rem;
  font-weight: 500;
`