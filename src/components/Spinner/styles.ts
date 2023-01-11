import { ActivityIndicator, StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import { theme } from '../../global';

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const Spinner = styled(ActivityIndicator).attrs({
  size: 'small',
  color: theme.colors.brand.primary,
})``;

export { styles };
