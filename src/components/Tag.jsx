import React from 'react'
import { styled } from 'styled-components'

export const Tag = ({ name }) => {
  return (
    <Container>{name}</Container>
  )
}

const Container = styled.div`
  background-color: #d5d5d5;
  border-radius: 15px;
  padding: 5px 20px;
  text-align: center;
  width: fit-content;
`