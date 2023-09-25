import React from 'react'
import { styled } from 'styled-components'

export const Tag = ({ name }) => {
  return (
    <Container>{name}</Container>
  )
}

const Container = styled.div`
  user-select: none;
  cursor: pointer;
  /* background-color: #223d66; */
  border: 2px solid rgba(0, 0, 0, .25);
  color: #4ab9ec;
  color: rgba(0, 0, 0, .5);
  line-height: 24px;
  border-radius: 15px;
  padding: 5px 20px;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  text-align: center;
  width: fit-content;
  font-weight: 500;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 1);
    color: rgba(0, 0, 0, 1);
    transition: all .25s ease-out;
  }
`