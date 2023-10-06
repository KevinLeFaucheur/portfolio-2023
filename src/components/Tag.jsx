import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { TagContext } from '../App';

export const Tag = ({ name, isSelected }) => {
  const { toggleTag } = useContext(TagContext);

  const handleTagToggle = (name) => {
    toggleTag(name);
  }

  return (
    <Container onClick={() => handleTagToggle(name)} className={isSelected ? 'selected' : ''} >{name}</Container>
  )
}

const Container = styled.div`
  user-select: none;
  cursor: pointer;
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

  &.selected {
    border: 2px solid rgba(0, 0, 0, 1);
    color: rgba(0, 0, 0, 1);
    transition: all .25s ease-out;
  }

  &:hover {
    border: 2px solid rgb(74, 185, 236);
    color: rgba(74, 185, 236, 1);
    transition: all .25s ease-out;
  }
`