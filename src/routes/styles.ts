import IconAtomic from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

import { theme } from '../global';

export const Icon = styled(IconAtomic).attrs({
  name: 'arrow-back',
  size: 28,
})`
  color: ${theme.colors.brand.header};
`;
