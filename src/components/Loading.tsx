import { ActivityIndicator, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

type Props = {
  size?: number,
  style?: ViewStyle,
}

const Loading = ({ size, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} />
    </View>
  )
}

export { Loading }

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
})