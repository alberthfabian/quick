import axios from 'axios';

// export const WATCH_MOVIE = 'WATCH_MOVIE';
export const MORE = 'MORE';
export const INITIAL = 'INITIAL';
export const MODAL = 'MODAL';
// export const FAVORITES = 'FAVORITES';

let pokemon = {};

export const initial = () => {

  if(localStorage.getItem('pokemon')) {
    pokemon = JSON.parse(localStorage.getItem('pokemon'));
    return{
      type: 'INITIAL',
      payload: pokemon,
    }
  } else {
    return dispatch => {
      return axios.get('https://pokeapi.co/api/v2/pokedex/national')
      .then(response => {
        localStorage.setItem('pokemon', JSON.stringify(response.data));
        pokemon = JSON.parse(localStorage.getItem('pokemon'));
        dispatch({
          type: 'INITIAL',
          payload: pokemon,
        })
      });
    };
  }
}

export const more = (value) => {
  return {
    type: MORE,
    payload: value
  }
}

export const modal = (value) => {
  return {
    type: MODAL,
    payload: value
  }
}