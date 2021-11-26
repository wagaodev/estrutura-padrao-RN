import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

// import {  } from '~/components';
// import {  } from '~/assets';
// import {  } from '~/helpers';
// import {  } from '~/types';
import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <S.Title>Hello Motherfuckers</S.Title>
      <S.Description>Wagnifico na parada</S.Description>
      <Icon name="home" size={24} color="#fff" />
    </S.Container>
  );
};
export { Home };
