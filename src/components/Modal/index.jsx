import React from 'react';
import { useDispatch } from 'react-redux'; 
import { useSelector } from 'react-redux';
import Picture from '../Picture';
import { open } from '../../redux/actions/ShopAction';
import { getImg } from '../Images';
import { Div, Container, Photo, Close, Info, Box, Name, Types } from './style';

const Modal = () => {

  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop);

  return (
    <Div>
      <Container>
        <Photo>
          {
            shop.pokemon.pokemon_entries.filter(pokemon => 
              pokemon.pokemon_species.name === shop.modal  
            ).map(pokemon => (
              <Picture key={pokemon.entry_number} name={shop.modal} num={pokemon.entry_number} />
            ))
          }
        </Photo>
        <Info>
          <Name>
            <h3>{shop.modal}</h3>
            <div>
            {
              shop.data === undefined ? '' :
              <p>{shop.data.id}</p>
            }
            </div>
          </Name>
          <Box>
            {
              shop.info === undefined ? '' : 
              shop.data === undefined ? '' :
              <>
                <p>Height</p>
                <p>{shop.info.height}</p>
                <p>Weight</p>
                <p>{shop.info.weight}</p>
                <p>Color</p>
                <p>{shop.data.color.name}</p>
              </>
            }
          </Box>
          <Types>
            <p>Types:</p>
            <div>
              {
                shop.info === undefined ? '' : 
                shop.data === undefined ? '' :
                shop.info.types.map(info => (
                  <p key={info.slot}>{info.type.name}</p>
                ))
              }
            </div>
          </Types>
        </Info>
      </Container>
      <Close>
        <button onClick={() => dispatch(open(false))}>
          <img src={getImg('close')} alt='Close'/>
        </button>
      </Close>
    </Div>
  )
};

export default Modal;