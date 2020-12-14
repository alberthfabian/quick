import styled from 'styled-components';
import { device, PRIMARY, SECONDARY } from '../Style';

export const Div = styled.div ` 
  position: fixed;
  z-index: 100;
  background-color: rgb(172 171 208 / 50%);;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media ${device.mobileS} {
    left: 0px;
    top: 0px;
    padding-top: 50px;
  }
`

export const Container = styled.div `
  background-color: ${SECONDARY}; 
  @media ${device.mobileS} {
    padding: 10px;
    width: 230px;
    height: 480px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    padding: 20px;
    width: 500px;
    height: 450px;
  }
  @media ${device.laptop} {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
  }
  position: relative;
  border: 1px solid ${PRIMARY};
`

export const Info = styled.div ` 
  h3 {
    text-align: center;
  }
`

export const Name = styled.div ` 
  margin: 10px 0px 10px 0px;
  display: flex;
  h3 {
    margin: 5px 10px 0px 0px;
  }
  p {
    margin: 0px 0px 0px 0px;
    padding: 10px 15px 10px 15px;
  }
  div {
    border: 1px solid ${PRIMARY};
    border-radius: 50%;
  }
`

export const Box = styled.div ` 
  
  @media ${device.mobileS} {
    padding: 10px;
  }
  @media ${device.tablet} {
    padding: 20px;
  }
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 2fr;
  border: 1px solid ${PRIMARY};
  p {
    margin: 0px 0px 0px 0px;
  }
  div {
    display: flex;
    p {
      margin-right: 10px;
    }
  }
`

export const Types = styled.div ` 
  div {
    display: flex;
    p {
      margin: 0px 10px 0px 0px;
    }
  }
`

export const Close = styled.div ` 
  button {
    background-color: transparent;
    border: 0px solid;
    right: 10px;
    top: 10px;
    img {
      width: 20px;
    }
    :hover {
      cursor: pointer;
    }
    :focus {
      outline: none;
    }
  }
`

export const Photo = styled.div `
display: flex;
justify-content: center;
img {
  @media ${device.mobileS} {
    width: 150px;
    height: 200px;
  }
  @media ${device.laptop} {
    width: 250px;
    height: 300px;
  }
}
`