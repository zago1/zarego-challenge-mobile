import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Footer = ({ children, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      { children }
    </View>
  )
}

export { Footer };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  }
})