import React from 'react';
import Filters from '../../components/Filters';
import Content from '../../components/Content';
import { Div } from './style';
// import Loading from '../../components/Loading'; 
// import { useSelector } from 'react-redux';


const Home = () => {

  // const shop = useSelector((state) => state.shop);

  return (
    <Div>
      <Filters />
      <Content />
      {/* {
        shop.pokemon === undefined ? <Loading /> : console.log(shop.pokemon)
      } */}
    </Div>
  )
};

export default Home;