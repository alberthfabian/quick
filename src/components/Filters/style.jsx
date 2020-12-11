import styled from 'styled-components';
import { PRIMARY, device } from '../Style';

export const Filter = styled.section ` 
  padding: 10px 10px 10px 10px;
  border-right: 1px solid ${PRIMARY};
  padding-right: 50px;
  @media ${device.tablet} {
    width: 200px;
  }
`

export const Title = styled.div ` 
  display: flex;
  h4 {
    margin: 0px;
  }
  img {
    height: 20px;
    margin-left: 20px;
  }
`