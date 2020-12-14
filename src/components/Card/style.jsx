import styled from 'styled-components';
import { QUATERNARY, PRIMARY } from '../Style';

export const Button = styled.button ` 
  width: 150px;
  height: 200px;
  border: 1px solid ${PRIMARY};
  border-radius: 10px;
  margin: 10px;
  :hover {
    cursor: pointer;
    background-color: ${QUATERNARY};
  }
  :focus {
    outline: none;
  }
  img {
    height: 100px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
`