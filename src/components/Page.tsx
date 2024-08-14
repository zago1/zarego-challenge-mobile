import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

type Props = {
  children: React.ReactNode,
  style?: ViewStyle
}

const Page = ({ children, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

export { Page }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  }
});