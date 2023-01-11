import styled from 'styled-components/native';

import { theme } from '../../global';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.base.black};
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.colors.base.white};
  font-family: Sk-Modernist-Bold;
`;
export const Description = styled.Text`
  font-size: 16px;
  color: ${theme.colors.base.white};
`;
