import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
};

export type TOnboarding = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export type THome = NativeStackScreenProps<RootStackParamList, 'Home'>;
