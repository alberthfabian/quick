import styled from 'styled-components';
import { PRIMARY, QUATERNARY, TERTIARY, SECONDARY, device } from '../Style';

export const Filter = styled.section ` 
  padding: 10px 10px 10px 10px;
  border-right: 1px solid ${PRIMARY};
  padding-right: 50px;
  @media ${device.tablet} {
    width: 250px;
  }
`

export const Title = styled.div ` 
  display: flex;
  h4 {
    margin: 0px 0px 0px 0px;
  }
  img {
    height: 20px;
    margin-left: 20px;
  }
`

export const Line = styled.div ` 
  height: 1px;
  background-color: ${PRIMARY};
  margin: 30px 0px 10px 0px;
`

export const Section = styled.section ` 
  div {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
  }
`

export const SectionColor = styled.section ` 
  div {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`

export const Reset = styled.section ` 
  text-align: center;
  button {
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
  }
`