import React from 'react';
import Card from '../Card';
import Loading from '../Loading'; 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { more } from '../../redux/actions/ShopAction';
import { More } from './style';
import { Main } from './style';

const Content = () => {

  const shop = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  console.log(shop.more);

  return (
    <Main>
      <h4>Choose a Pokemon to get more information</h4>
      <section>
        {
          shop.pokemon === undefined ? <Loading /> : 

          shop.more === undefined ? 

          shop.pokemon.pokemon_entries.filter(pokemon => parseInt(pokemon.entry_number) < 21).map(pokemon => (                         
            <Card key={pokemon.entry_number} id={parseInt(pokemon.entry_number)} name={pokemon.pokemon_species.name}/> 
          )) : 
          shop.pokemon.pokemon_entries.filter(pokemon => parseInt(pokemon.entry_number) > shop.more && parseInt(pokemon.entry_number) < shop.more + 20+1).map( pokemon => ( 
            parseInt(pokemon.entry_number) > 895 ? '' :
            <Card key={pokemon.entry_number} id={parseInt(pokemon.entry_number)} name={pokemon.pokemon_species.name}/>      
          ))
        }
      </section>
      { 
        parseInt(shop.more) === 880 ? '' :
        <More onClick={() => dispatch(more(20))}>Load more</More>
      }
    </Main>
  )
};

export default Content;