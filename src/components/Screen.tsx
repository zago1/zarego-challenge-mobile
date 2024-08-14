import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  children: React.ReactNode,
  style?: ViewStyle
}
const Screen = ({ children, style }: Props) => {
  return <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#232426',
  }
})

export { Screen };