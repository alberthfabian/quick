import styled from 'styled-components';
import { PRIMARY, QUATERNARY, SECONDARY, TERTIARY } from '../Style';

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
`