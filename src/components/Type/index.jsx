import React from 'react';
import { useDispatch } from 'react-redux';
import { consolidated } from '../../redux/actions/ShopAction';
// import { check } from '../../redux/actions/ShopAction';
import { Div } from './style';

const Type = (props) => {

  const { name, url } = props;
  const dispatch = useDispatch();

  return (
    <Div>
      {/* <input type="checkbox" id={url} onClick={() => dispatch(check(url, name))} /> */}
      <input type="checkbox" id={url} onClick={() => dispatch(consolidated(url, name))} />
      <label htmlFor={url}>{name}</label> 
    </Div>
  )
};

export default Type;