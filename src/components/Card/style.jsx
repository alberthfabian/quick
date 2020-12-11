import styled from 'styled-components';
import { QUATERNARY, PRIMARY } from '../Style';

export const Button = styled.button ` 
  width: 350px;
  height: 400px;
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
    height: 300px;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
`