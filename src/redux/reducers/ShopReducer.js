const { TYPE, COLOR, MORE, INITIAL, MODAL, CONSOLIDATED, RESET, OPEN, INFO, DATA } = require("../actions/ShopAction");

let value = 0;

const shop = (state = [], action) => {
  switch(action.type) {
    case INITIAL: {
      return {
        ...state,
        pokemon: action.payload,
      }
    }
    case CONSOLIDATED: {
      return {
        ...state,
        consolidated: action.payload,
      }
    }
    case MORE: { 
      value = value + action.payload
      return {
        ...state,
        more: value,
      }
    }
    case TYPE: { 
      return {
        ...state,
        type: action.payload,
      }
    }
    case COLOR: { 
      return {
        ...state,
        color: action.payload,
      }
    }
    case MODAL: {
      return {
        ...state,
        modal: action.payload
      }
    }
    case OPEN: {
      return {
        ...state,
        open: action.payload
      }
    }
    case RESET: {
      return {
        ...state,
        reset: action.payload
      }
    }
    case INFO: {
      return {
        ...state,
        info: action.payload
      }
    }
    case DATA : {
      return {
        ...state,
        data: action.payload
      }
    }
    default: return state;
  }
}

export default shop;