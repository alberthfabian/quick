import React from 'react';
import { modal } from '../../redux/actions/ShopAction';
import { Button } from './style';

const Card = (props) => {

  const { name, id } = props;

  return (
    <Button onClick={() => modal(id)}>
      {
        id < 10 ?
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt={name}/> :
        id > 9 && id < 100 ?
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt={name}/> :
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt={name}/>
      }
      <p>{name}</p>
    </Button>
  )
};

export default Card;