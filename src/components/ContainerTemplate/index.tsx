import React from 'react';

import * as S from './styles';

import { TProps } from './types';

export const ContainerTemplate = ({ children }: TProps) => {
  return (
    <S.Container>
      <S.Scroll>{children}</S.Scroll>
    </S.Container>
  );
};
