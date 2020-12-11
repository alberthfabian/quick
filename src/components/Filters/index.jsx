import React from 'react';
import { getImg } from '../Images';
import { Filter, Title } from './style';

const Filters = () => {
  return (
    <Filter>
      <Title>
        <h4>Filters</h4> 
        <img src={getImg('filters')} alt='Filters'/>
      </Title>
    </Filter>
  )
};

export default Filters;