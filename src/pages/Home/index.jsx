import React from 'react';
import Filters from '../../components/Filters';
import Content from '../../components/Content';
import Modal from '../../components/Modal';
import { useSelector } from 'react-redux';
import { Div } from './style';

const Home = () => {

  const shop = useSelector((state) => state.shop);

  return (
    <Div>
      {
        shop.open === true ? <Modal /> : ''
      }
      <Filters />
      <Content />
    </Div>
  )
};

export default Home;