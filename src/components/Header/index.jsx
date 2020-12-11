import React from 'react';
import { Head } from './style';
import { getImg } from '../Images';

const handleChange = (e) => {
  console.log(e.target.value);
}

const Header = () => {

  return (
    <Head>
      <img src={getImg('logo')} alt='Logo'/>
      <div>
        <img src={getImg('search')} alt=''/>
        <input type='text' onChange={(e) => {handleChange(e)}} placeholder='search'/>
      </div>
    </Head>
  )
};

export default Header;