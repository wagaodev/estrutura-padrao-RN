import styled from 'styled-components/native';
// import { Dimensions } from 'react-native'

// const { width, height } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape_dark};
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;
