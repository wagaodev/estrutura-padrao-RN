import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <S.Title>Hello Motherfuckers</S.Title>
      <S.Description>Wagnifico na parada</S.Description>
      <Icon name="home" size={24} color="#fff" />
    </S.Container>
  );
};
