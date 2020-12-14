import axios from 'axios';

export const MORE = 'MORE';
export const INITIAL = 'INITIAL';
export const MODAL = 'MODAL';
export const TYPE = 'TYPE';
export const COLOR = 'COLOR';
export const CONSOLIDATED = 'CONSOLIDATED';
export const RESET = 'RESET';
export const OPEN = 'OPEN';
export const INFO = 'INFO';
export const DATA = 'DATA';

let pokemon = {};
let type = {};
let color = {};
let consolidate = [];
let consolidateColor = [];
let remove = [];
let unique = [];
let uniqueColor = [];
let colorFilter = [];
let countColor = 0;
let checkNormal = 0;
let checkFighting = 0;
let checkFlying = 0;
let checkPoison = 0;
let checkGround = 0;
let checkRock = 0;
let checkBug = 0;
let checkGhost = 0;
let checkSteel = 0;
let checkFire = 0;
let checkWater = 0;
let checkGrass = 0;
let checkElectric = 0;
let checkPsychic = 0;
let checkIce = 0;
let checkDragon = 0;
let checkDark = 0;
let checkFairy = 0;
let checkUnknown = 0;
let checkShadow = 0;
let colorCheck = [];


export const initial = () => {

  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/1/').disabled = true; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/2/').disabled = true; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/3/').disabled = true; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/4/').disabled = true; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/5/').disabled = true; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/6/').disabled = true; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/7/').disabled = true; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/8/').disabled = true; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/9/').disabled = true; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/10/').disabled = true; }, 400);

  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/1/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/2/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/3/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/4/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/5/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/6/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/7/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/8/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/9/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/pokemon-color/10/').checked = false; }, 400);

  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/1/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/2/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/3/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/4/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/5/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/6/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/7/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/8/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/9/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/10/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/11/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/12/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/13/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/14/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/15/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/16/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/17/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/18/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/10001/').disabled = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/10002/').disabled = false; }, 400);

  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/1/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/2/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/3/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/4/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/5/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/6/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/7/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/8/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/9/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/10/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/11/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/12/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/13/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/14/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/15/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/16/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/17/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/18/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/10001/').checked = false; }, 400);
  setTimeout(function(){ document.getElementById('https://pokeapi.co/api/v2/type/10002/').checked = false; }, 400);

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

export const intitialType = () => {

  if(localStorage.getItem('type')) {
    type = JSON.parse(localStorage.getItem('type'));
    return{
      type: 'TYPE',
      payload: type,
    }
  } else {
    return dispatch => {
      return axios.get('https://pokeapi.co/api/v2/type')
      .then(response => {
        localStorage.setItem('type', JSON.stringify(response.data));
        type = JSON.parse(localStorage.getItem('type'));
        dispatch({
          type: 'TYPE',
          payload: type,
        })
      });
    };
  }
}

export const intitialColor = () => {

  if(localStorage.getItem('color')) {
    color = JSON.parse(localStorage.getItem('color'));
    return{
      type: 'COLOR',
      payload: color,
    }
  } else {
    return dispatch => {
      return axios.get('https://pokeapi.co/api/v2/pokemon-color')
      .then(response => {
        localStorage.setItem('color', JSON.stringify(response.data));
        color = JSON.parse(localStorage.getItem('color'));
        dispatch({
          type: 'COLOR',
          payload: color,
        })
      });
    };
  }
}

export const more = (value) => {
  return {
    type: 'MORE',
    payload: value
  }
}

export const consolidated = (url, name ) => { 

  let checkBox = document.getElementById(url);
  let checkBoxBlack = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/1/');
  let checkBoxBlue = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/2/');
  let checkBoxBrown = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/3/');
  let checkBoxGray = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/4/');
  let checkBoxGreen = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/5/');
  let checkBoxPink = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/6/');
  let checkBoxPurple = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/7/');
  let checkBoxRed = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/8/');
  let checkBoxWhite = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/9/');
  let checkBoxYellow = document.getElementById('https://pokeapi.co/api/v2/pokemon-color/10/');


  let checkBoxNormal = document.getElementById('https://pokeapi.co/api/v2/type/1/');
  let checkBoxFighting = document.getElementById('https://pokeapi.co/api/v2/type/2/');
  let checkBoxFlying = document.getElementById('https://pokeapi.co/api/v2/type/3/');
  let checkBoxPoison = document.getElementById('https://pokeapi.co/api/v2/type/4/');
  let checkBoxGround = document.getElementById('https://pokeapi.co/api/v2/type/5/');
  let checkBoxRock = document.getElementById('https://pokeapi.co/api/v2/type/6/');
  let checkBoxBug = document.getElementById('https://pokeapi.co/api/v2/type/7/');
  let checkBoxGhost = document.getElementById('https://pokeapi.co/api/v2/type/8/');
  let checkBoxSteel = document.getElementById('https://pokeapi.co/api/v2/type/9/');
  let checkBoxFire = document.getElementById('https://pokeapi.co/api/v2/type/10/');
  let checkBoxWater = document.getElementById('https://pokeapi.co/api/v2/type/11/');
  let checkBoxGrass = document.getElementById('https://pokeapi.co/api/v2/type/12/');
  let checkBoxElectric = document.getElementById('https://pokeapi.co/api/v2/type/13/');
  let checkBoxPsychic = document.getElementById('https://pokeapi.co/api/v2/type/14/');
  let checkBoxIce = document.getElementById('https://pokeapi.co/api/v2/type/15/');
  let checkBoxDragon = document.getElementById('https://pokeapi.co/api/v2/type/16/');
  let checkBoxDark = document.getElementById('https://pokeapi.co/api/v2/type/17/');
  let checkBoxFairy = document.getElementById('https://pokeapi.co/api/v2/type/18/');
  let checkBoxUnknown = document.getElementById('https://pokeapi.co/api/v2/type/10001/');
  let checkBoxShadow = document.getElementById('https://pokeapi.co/api/v2/type/10002/');

  if (checkBox.checked === true){

    if(url === 'https://pokeapi.co/api/v2/pokemon-color/1/' || url === 'https://pokeapi.co/api/v2/pokemon-color/2/' || url === 'https://pokeapi.co/api/v2/pokemon-color/3/' || url === 'https://pokeapi.co/api/v2/pokemon-color/4/' || url === 'https://pokeapi.co/api/v2/pokemon-color/5/' || url === 'https://pokeapi.co/api/v2/pokemon-color/6/' || url === 'https://pokeapi.co/api/v2/pokemon-color/7/' || url === 'https://pokeapi.co/api/v2/pokemon-color/8/' || url === 'https://pokeapi.co/api/v2/pokemon-color/9/' || url === 'https://pokeapi.co/api/v2/pokemon-color/10/' || url === 'https://pokeapi.co/api/v2/pokemon-color/11/' || url === 'https://pokeapi.co/api/v2/pokemon-color/12/' || url === 'https://pokeapi.co/api/v2/pokemon-color/13/' || url === 'https://pokeapi.co/api/v2/pokemon-color/14/' || url === 'https://pokeapi.co/api/v2/pokemon-color/15/' || url === 'https://pokeapi.co/api/v2/pokemon-color/16/' || url === 'https://pokeapi.co/api/v2/pokemon-color/17/' || url === 'https://pokeapi.co/api/v2/pokemon-color/18/' || url === 'https://pokeapi.co/api/v2/pokemon-color/19/' || url === 'https://pokeapi.co/api/v2/pokemon-color/20/'){

      if (checkNormal === 1 || checkFighting === 1 || checkFlying === 1 || checkPoison === 1 || checkGround === 1 || checkRock === 1 || checkBug === 1 || checkGhost === 1 || checkSteel === 1 || checkFire === 1 || checkWater === 1 || checkGrass === 1 || checkElectric === 1 || checkPsychic === 1 || checkIce === 1 || checkDragon === 1 || checkDark === 1 || checkFairy === 1 || checkUnknown === 1 || checkShadow === 1 ) {

      if(checkNormal === 1){
        checkNormal = 0;
        checkFighting = 0;
        checkFlying = 0;
        checkPoison = 0;
        checkGround = 0;
        checkRock = 0;
        checkBug = 0;
        checkGhost = 0;
        checkSteel = 0;
        checkFire = 0;
        checkWater = 0;
        checkGrass = 0;
        checkElectric = 0;
        checkPsychic = 0;
        checkIce = 0;
        checkDragon = 0;
        checkDark = 0;
        checkFairy = 0;
        checkUnknown = 0;
        checkShadow = 0;
      } else {
        checkNormal = 1;
        checkFighting = 1;
        checkFlying = 1;
        checkPoison = 1;
        checkGround = 1;
        checkRock = 1;
        checkBug = 1;
        checkGhost = 1;
        checkSteel = 1;
        checkFire = 1;
        checkWater = 1;
        checkGrass = 1;
        checkElectric = 1;
        checkPsychic = 1;
        checkIce = 1;
        checkDragon = 1;
        checkDark = 1;
        checkFairy = 1;
        checkUnknown = 1;
        checkShadow = 1;
      }

        checkBoxNormal.disabled = true;
        checkBoxFighting.disabled = true;
        checkBoxFlying.disabled = true;
        checkBoxPoison.disabled = true;
        checkBoxGround.disabled = true;
        checkBoxRock.disabled = true;
        checkBoxBug.disabled = true;
        checkBoxGhost.disabled = true;
        checkBoxSteel.disabled = true;
        checkBoxFire.disabled = true;
        checkBoxWater.disabled = true;
        checkBoxGrass.disabled = true;
        checkBoxElectric.disabled = true;
        checkBoxPsychic.disabled = true;
        checkBoxIce.disabled = true;
        checkBoxDragon.disabled = true;
        checkBoxDark.disabled = true;
        checkBoxFairy.disabled = true;
        checkBoxUnknown.disabled = true;
        checkBoxShadow.disabled = true;
  
      } 
    }
  
    switch (url) {
      case 'https://pokeapi.co/api/v2/pokemon-color/1/':

        checkBoxBlue.disabled = true;
        checkBoxBrown.disabled = true;
        checkBoxGray.disabled = true;
        checkBoxGreen.disabled = true;
        checkBoxPink.disabled = true;
        checkBoxPurple.disabled = true;
        checkBoxRed.disabled = true;
        checkBoxWhite.disabled = true;
        checkBoxYellow.disabled = true;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/2/':

        checkBoxBlack.disabled = true;
        checkBoxBrown.disabled = true;
        checkBoxGray.disabled = true;
        checkBoxGreen.disabled = true;
        checkBoxPink.disabled = true;
        checkBoxPurple.disabled = true;
        checkBoxRed.disabled = true;
        checkBoxWhite.disabled = true;
        checkBoxYellow.disabled = true;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/3/':

        checkBoxBlack.disabled = true;
        checkBoxBlue.disabled = true;
        checkBoxGray.disabled = true;
        checkBoxGreen.disabled = true;
        checkBoxPink.disabled = true;
        checkBoxPurple.disabled = true;
        checkBoxRed.disabled = true;
        checkBoxWhite.disabled = true;
        checkBoxYellow.disabled = true;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/4/':

        checkBoxBlack.disabled = true;
        checkBoxBlue.disabled = true;
        checkBoxBrown.disabled = true;
        checkBoxGreen.disabled = true;
        checkBoxPink.disabled = true;
        checkBoxPurple.disabled = true;
        checkBoxRed.disabled = true;
        checkBoxWhite.disabled = true;
        checkBoxYellow.disabled = true;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/5/':

        checkBoxBlack.disabled = true;
        checkBoxBlue.disabled = true;
        checkBoxBrown.disabled = true;
        checkBoxGray.disabled = true;
        checkBoxPink.disabled = true;
        checkBoxPurple.disabled = true;
        checkBoxRed.disabled = true;
        checkBoxWhite.disabled = true;
        checkBoxYellow.disabled = true;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/6/':

        checkBoxBlack.disabled = true;
        checkBoxBlue.disabled = true;
        checkBoxBrown.disabled = true;
        checkBoxGray.disabled = true;
        checkBoxGreen.disabled = true;
        checkBoxPurple.disabled = true;
        checkBoxRed.disabled = true;
        checkBoxWhite.disabled = true;
        checkBoxYellow.disabled = true;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/7/':

        checkBoxBlack.disabled = true;
        checkBoxBlue.disabled = true;
        checkBoxBrown.disabled = true;
        checkBoxGray.disabled = true;
        checkBoxGreen.disabled = true;
        checkBoxPink.disabled = true;
        checkBoxRed.disabled = true;
        checkBoxWhite.disabled = true;
        checkBoxYellow.disabled = true;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/8/':

        checkBoxBlack.disabled = true;
        checkBoxBlue.disabled = true;
        checkBoxBrown.disabled = true;
        checkBoxGray.disabled = true;
        checkBoxGreen.disabled = true;
        checkBoxPink.disabled = true;
        checkBoxPurple.disabled = true;
        checkBoxWhite.disabled = true;
        checkBoxYellow.disabled = true;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/9/':

        checkBoxBlack.disabled = true;
        checkBoxBlue.disabled = true;
        checkBoxBrown.disabled = true;
        checkBoxGray.disabled = true;
        checkBoxGreen.disabled = true;
        checkBoxPink.disabled = true;
        checkBoxPurple.disabled = true;
        checkBoxRed.disabled = true;
        checkBoxYellow.disabled = true;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/10/':

        checkBoxBlack.disabled = true;
        checkBoxBlue.disabled = true;
        checkBoxBrown.disabled = true;
        checkBoxGray.disabled = true;
        checkBoxGreen.disabled = true;
        checkBoxPink.disabled = true;
        checkBoxPurple.disabled = true;
        checkBoxRed.disabled = true;
        checkBoxWhite.disabled = true;

        break;

      default:
        break;
    }
  } else {

    switch (url) {
      case 'https://pokeapi.co/api/v2/pokemon-color/1/':

        checkBoxBlue.disabled = false;
        checkBoxBrown.disabled = false;
        checkBoxGray.disabled = false;
        checkBoxGreen.disabled = false;
        checkBoxPink.disabled = false;
        checkBoxPurple.disabled = false;
        checkBoxRed.disabled = false;
        checkBoxWhite.disabled = false;
        checkBoxYellow.disabled = false;
        
        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/2/':

        checkBoxBlack.disabled = false;
        checkBoxBrown.disabled = false;
        checkBoxGray.disabled = false;
        checkBoxGreen.disabled = false;
        checkBoxPink.disabled = false;
        checkBoxPurple.disabled = false;
        checkBoxRed.disabled = false;
        checkBoxWhite.disabled = false;
        checkBoxYellow.disabled = false;

        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/3/':

        checkBoxBlack.disabled = false;
        checkBoxBlue.disabled = false;
        checkBoxGray.disabled = false;
        checkBoxGreen.disabled = false;
        checkBoxPink.disabled = false;
        checkBoxPurple.disabled = false;
        checkBoxRed.disabled = false;
        checkBoxWhite.disabled = false;
        checkBoxYellow.disabled = false;

        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/4/':

        checkBoxBlack.disabled = false;
        checkBoxBlue.disabled = false;
        checkBoxBrown.disabled = false;
        checkBoxGreen.disabled = false;
        checkBoxPink.disabled = false;
        checkBoxPurple.disabled = false;
        checkBoxRed.disabled = false;
        checkBoxWhite.disabled = false;
        checkBoxYellow.disabled = false;

        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/5/':

        checkBoxBlack.disabled = false;
        checkBoxBlue.disabled = false;
        checkBoxBrown.disabled = false;
        checkBoxGray.disabled = false;
        checkBoxPink.disabled = false;
        checkBoxPurple.disabled = false;
        checkBoxRed.disabled = false;
        checkBoxWhite.disabled = false;
        checkBoxYellow.disabled = false;

        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/6/':

        checkBoxBlack.disabled = false;
        checkBoxBlue.disabled = false;
        checkBoxBrown.disabled = false;
        checkBoxGray.disabled = false;
        checkBoxGreen.disabled = false;
        checkBoxPurple.disabled = false;
        checkBoxRed.disabled = false;
        checkBoxWhite.disabled = false;
        checkBoxYellow.disabled = false;

        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/7/':

        checkBoxBlack.disabled = false;
        checkBoxBlue.disabled = false;
        checkBoxBrown.disabled = false;
        checkBoxGray.disabled = false;
        checkBoxGreen.disabled = false;
        checkBoxPink.disabled = false;
        checkBoxRed.disabled = false;
        checkBoxWhite.disabled = false;
        checkBoxYellow.disabled = false;

        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/8/':

        checkBoxBlack.disabled = false;
        checkBoxBlue.disabled = false;
        checkBoxBrown.disabled = false;
        checkBoxGray.disabled = false;
        checkBoxGreen.disabled = false;
        checkBoxPink.disabled = false;
        checkBoxPurple.disabled = false;
        checkBoxWhite.disabled = false;
        checkBoxYellow.disabled = false;

        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/9/':

        checkBoxBlack.disabled = false;
        checkBoxBlue.disabled = false;
        checkBoxBrown.disabled = false;
        checkBoxGray.disabled = false;
        checkBoxGreen.disabled = false;
        checkBoxPink.disabled = false;
        checkBoxPurple.disabled = false;
        checkBoxRed.disabled = false;
        checkBoxYellow.disabled = false;

        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;
      case 'https://pokeapi.co/api/v2/pokemon-color/10/':

        checkBoxBlack.disabled = false;
        checkBoxBlue.disabled = false;
        checkBoxBrown.disabled = false;
        checkBoxGray.disabled = false;
        checkBoxGreen.disabled = false;
        checkBoxPink.disabled = false;
        checkBoxPurple.disabled = false;
        checkBoxRed.disabled = false;
        checkBoxWhite.disabled = false;

        checkBoxNormal.disabled = false;
        checkBoxFighting.disabled = false;
        checkBoxFlying.disabled = false;
        checkBoxPoison.disabled = false;
        checkBoxGround.disabled = false;
        checkBoxRock.disabled = false;
        checkBoxBug.disabled = false;
        checkBoxGhost.disabled = false;
        checkBoxSteel.disabled = false;
        checkBoxFire.disabled = false;
        checkBoxWater.disabled = false;
        checkBoxGrass.disabled = false;
        checkBoxElectric.disabled = false;
        checkBoxPsychic.disabled = false;
        checkBoxIce.disabled = false;
        checkBoxDragon.disabled = false;
        checkBoxDark.disabled = false;
        checkBoxFairy.disabled = false;
        checkBoxUnknown.disabled = false;
        checkBoxShadow.disabled = false;

        break;

      default:
        break;
    }

  }

  if( name === 'black' || name === 'blue' || name === 'brown' || name === 'gray' || name === 'green' || name === 'pink' || name === 'purple' || name === 'red' || name === 'white' || name === 'yellow' ) {

    return dispatch => {
      return axios.get(url)
      .then(response => {
        if(unique.length !== 0){
          if (checkBox.checked === true){

            checkNormal = 1;
            checkFighting = 1;
            checkFlying = 1;
            checkPoison = 1;
            checkGround = 1;
            checkRock = 1;
            checkBug = 1;
            checkGhost = 1;
            checkSteel = 1;
            checkFire = 1;
            checkWater = 1;
            checkGrass = 1;
            checkElectric = 1;
            checkPsychic = 1;
            checkIce = 1;
            checkDragon = 1;
            checkDark = 1;
            checkFairy = 1;
            checkUnknown = 1;
            checkShadow = 1;

            consolidateColor = [];
            for(let i=0; i<response.data.pokemon_species.length; i++){
              consolidateColor.push(response.data.pokemon_species[i].name);
            }
            function onlyUnique(value, index, self) { 
              return self.indexOf(value) === index;
            }
            uniqueColor = consolidateColor.filter( onlyUnique );
            colorFilter = [];
            colorCheck = [];
            for(let i=0; i<unique.length; i++){
              countColor = 0;
              for(let j=0; j<uniqueColor.length; j++){
                if(unique[i] === uniqueColor[j]) {
                  colorFilter.push(unique[i]);
                } else {
                  countColor = countColor + 1;
                } 
              }
              if(name === 'black'){
                if(countColor === 44){
                  colorCheck.push(unique[i]);
                }
              } else if (name === 'blue'){
                if(countColor === 157){
                  colorCheck.push(unique[i]);
                }
              } else if (name === 'brown'){
                if(countColor === 131){
                  colorCheck.push(unique[i]);
                }
              } else if (name === 'gray'){
                if(countColor === 85){
                  colorCheck.push(unique[i]);
                }
              } else if (name === 'green'){
                if(countColor === 108){
                  colorCheck.push(unique[i]);
                }
              } else if (name === 'pink'){
                if(countColor === 52){
                  colorCheck.push(unique[i]);
                }
              } else if (name === 'purple'){
                if(countColor === 85){
                  colorCheck.push(unique[i]);
                }
              } else if (name === 'red'){
                if(countColor === 86){
                  colorCheck.push(unique[i]);
                }
              } else if (name === 'white'){
                if(countColor === 75){
                  colorCheck.push(unique[i]);
                }
              } else if (name === 'yellow'){
                if(countColor === 75){
                  colorCheck.push(unique[i]);
                }
              }
            }
            unique = [];
            for(let i=0; i<colorFilter.length; i++){
              unique.push(colorFilter[i]);
            }
            dispatch({
              type: 'CONSOLIDATED',
              payload: unique,
            })
          } else {
            for(let i=0; i<colorCheck.length; i++){
              unique.push(colorCheck[i]);
            }
            dispatch({
              type: 'CONSOLIDATED',
              payload: unique,
            })
          }
        }
      });
    };
  }

  // eslint-disable-next-line no-unreachable
  if( name === 'normal' || name === 'fighting' || name === 'flying' || name === 'poison' || name === 'ground' || name === 'rock' || name === 'bug' || name === 'ghost' || name === 'steel' || name === 'fire' || name === 'water' || name === 'grass' || name === 'electric' || name === 'psychic' || name === 'ice' || name === 'dragon' || name === 'dark' || name === 'fairy' || name === 'unknown' || name === 'shadow' ) {

    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/1/').disabled = false;
    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/2/').disabled = false;
    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/3/').disabled = false;
    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/4/').disabled = false;
    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/5/').disabled = false;
    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/6/').disabled = false;
    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/7/').disabled = false;
    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/8/').disabled = false;
    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/9/').disabled = false;
    document.getElementById('https://pokeapi.co/api/v2/pokemon-color/10/').disabled = false;

    checkNormal = 1;
    checkFighting = 1;
    checkFlying = 1;
    checkPoison = 1;
    checkGround = 1;
    checkRock = 1;
    checkBug = 1;
    checkGhost = 1;
    checkSteel = 1;
    checkFire = 1;
    checkWater = 1;
    checkGrass = 1;
    checkElectric = 1;
    checkPsychic = 1;
    checkIce = 1;
    checkDragon = 1;
    checkDark = 1;
    checkFairy = 1;
    checkUnknown = 1;
    checkShadow = 1;

    return dispatch => {
      return axios.get(url)
      .then(response => {

        if (checkBox.checked === true){
          for(let i=0; i<response.data.pokemon.length; i++){
            consolidate.push(response.data.pokemon[i].pokemon.name);
          }
          function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
          }
          unique = consolidate.filter( onlyUnique );
          dispatch({
            type: 'CONSOLIDATED',
            payload: unique,
          })
        } else {
          remove = [];
          for(let i=0; i<response.data.pokemon.length; i++){
            remove.push(response.data.pokemon[i].pokemon.name);
          }
          for(let i=0; i<unique.length; i++){
            for(let j=0; j<remove.length; j++){
              if(unique[i] === remove[j]) {
                unique.splice(i,1);
              }
            }
          }
          unique.splice(0,1);
          dispatch({
            type: 'CONSOLIDATED',
            payload: unique,
          })
        }
      });
    };
  }
}

export const modal = (value) => {
  return {
    type: 'MODAL',
    payload: value
  }
}

export const open = (value) => {
  return {
    type: 'OPEN',
    payload: value
  }
}

export const reset = (value) => {
  return {
    type: 'CONSOLIDATED',
    payload: value
  }
}

export const info = (name) => {
  return dispatch => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      dispatch({
        type: 'INFO',
        payload: response.data,
      })
    });
  };
}

export const data = (name) => {
  return dispatch => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    .then(response => {
      dispatch({
        type: 'DATA',
        payload: response.data,
      })
    });
  };
}