import React from 'react';
import Card from '../Card';
import Loading from '../Loading'; 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { more} from '../../redux/actions/ShopAction';
import { More, Main } from './style';

const Content = () => {

  const shop = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  return (
    <Main>
      <h4>Choose a Pokemon to get more information</h4>
      {
        shop.consolidated === undefined || shop.consolidated.length === 0 ? 
        <section>
          <div>
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
          </div>
          <div>
            { 
              parseInt(shop.more) === 880 ? '' :
              <More onClick={() => dispatch(more(20))}>Load more</More> 
            }
          </div>
        </section> : 
        <section>
          {
            shop.consolidated.map(name => (
              shop.pokemon.pokemon_entries.filter(pokemon => pokemon.pokemon_species.name === name ).map(pokemon => (
                <Card key={pokemon.entry_number} id={pokemon.entry_number} name={pokemon.pokemon_species.name} /> 
              ))
            ))
          }
        </section>
      }
      
    </Main>
  )
};

export default Content;