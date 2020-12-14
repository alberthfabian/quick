import React from 'react';
// import { useDispatch } from 'react-redux';
// import { handleChange } from '../../redux/actions/ShopAction';
import { Head } from './style';
import { getImg } from '../Images';

const Header = () => {

  // const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
  }

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