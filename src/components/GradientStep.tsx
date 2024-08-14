import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
  number: number;
  colors: string[];
  style?: ViewStyle;
}

const GradientStep = ({ colors, number, style }: Props) => {
  return (
    <>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientContainer}
      >
        <View style={styles.boxContainter}>
          <Text style={styles.text} >{number}</Text>
        </View>
      </LinearGradient>
    </>
  )
}

export { GradientStep };

const styles = StyleSheet.create({
  gradientContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  boxContainter: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 2
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700'
  }
})