import styled from 'styled-components';
import { PRIMARY, QUATERNARY, SECONDARY, TERTIARY, FIFTH } from '../Style';

export const Main = styled.div ` 
  padding: 10px 10px 10px 10px;
  width: 100%;
  text-align: center;
  h4 {
    font-family: 'Roboto', sans-serif;
  }
`

export const More = styled.button ` 
  background-color: ${PRIMARY};
  font-family: 'Roboto', sans-serif;
  color: ${SECONDARY};
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
    background-color: ${QUATERNARY};
    color: ${TERTIARY};
  }
  :focus {
    outline: none;
  }
`

export const Normal = styled.section ``
export const Fighting = styled.section ``
export const Flying = styled.section ``
export const Poison = styled.section ``
export const Ground = styled.section ``
export const Rock = styled.section ``
export const Bug = styled.section ``
export const Ghost = styled.section ``
export const Steel = styled.section ``
export const Fire = styled.section ``
export const Water = styled.section ``
export const Grass = styled.section ``
export const Electric = styled.section ``
export const Psychic = styled.section ``
export const Ice = styled.section ``
export const Dragon = styled.section ``
export const Dark = styled.section ``
export const Fairy = styled.section ``
export const Unknown = styled.section ``
export const Shadow = styled.section ``

export const Category = styled.h4 ` 
  color: ${FIFTH};
`