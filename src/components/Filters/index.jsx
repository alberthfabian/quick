import React from 'react';
import Type from '../Type';
import Color from '../Color';
import { getImg } from '../Images';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reset, initial } from '../../redux/actions/ShopAction';
import { Filter, Title, Section, Line, SectionColor, Reset } from './style';

const Filters = () => {

  const shop = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(reset([]));
    initial();
  }

  return (
    <Filter>
      <Title>
        <h4>Filters</h4> 
        <img src={getImg('filters')} alt='Filters'/>
      </Title>
      <Line/>
      <Section>
        <h4>Type</h4> 
        <div>
          {
            shop.type === undefined ? <Loading /> :
            shop.type.results.map(type => (
              <Type key={type.name} name={type.name} url={type.url} />
            ))
          }
        </div>
      </Section>
      <Line/>
      <SectionColor>
        <h4>Color</h4> 
        <div>
          {
            shop.color === undefined ? <Loading /> :
            shop.color.results.map(type => (
              <Color key={type.name} name={type.name} url={type.url} />
            ))
          }
        </div>
      </SectionColor>
      <Line/>
      <Reset>
        <button onClick={() => resetAll()}>Reset</button>
      </Reset>
    </Filter>
  )
};

export default Filters;