// const { WATCH_MOVIE } = require("../actions/ShopAction");
// const { MODAL } = require("../actions/ShopAction");
const { MORE } = require("../actions/ShopAction");
const { INITIAL } = require("../actions/ShopAction");

// let pokemon = JSON.parse(localStorage.getItem('pokemon'));
let value = 0;

const shop = (state = [], action) => {
  switch(action.type) {
    case INITIAL: {
      return {
        ...state,
        pokemon: action.payload,
      }
    }
    case MORE: { 
      value = value + action.payload
      return {
        ...state,
        more: value,
      }
    }
    // case MODAL: {
    //   return {
    //     ...state,
    //     modal: action.payload
    //   }
    // }
    default: return state;
  }
}

export default shop;