import React from 'react';
import { getImg } from '../Images';
import { useDispatch } from 'react-redux';
import { consolidated } from '../../redux/actions/ShopAction';
import { Div } from './style';

const Color = (props) => {

  const { name, url } = props;
  const dispatch = useDispatch();

  return (
    <Div>
      <img src={getImg(name)} alt={name}/> 
      <input type="checkbox" id={url} onClick={() => dispatch(consolidated(url, name))} />
    </Div>
  )
};

export default Color;