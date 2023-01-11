import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Spinner } from '../../components';

export const Onboarding = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  setTimeout(() => {
    setLoading(false);
    navigation.navigate('Home');
  }, 1500);

  if (loading) {
    return <Spinner />;
  }
  return null;
};
