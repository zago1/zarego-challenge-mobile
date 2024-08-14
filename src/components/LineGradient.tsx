import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
  colors: string[];
}

const LineGradient = ({ colors }: Props) => {
  return (
    <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
      <View style={{ width: '100%', height: 1 }} />
    </LinearGradient>
  );
}

export { LineGradient };