import React from 'react';

const Picture = (props) => {

  const { name, num } = props;

  return (
    <>
      {
        num < 10 ?
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${num}.png`} alt={name}/> :
        num > 9 && num < 100 ?
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${num}.png`} alt={name}/> :
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${num}.png`} alt={name}/>
      }
    </>
  )
};

export default Picture;