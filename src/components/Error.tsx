import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from './Button';

type Props = {
  retry(): void;
  message?: string;
}

const Error = ({ retry, message = 'Ops! Something went wrong' }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button style={styles.button} text="Retry" onPress={retry} />
    </View>
  )
}

export { Error };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16
  },
  text: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  button: {
    width: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 12,
  }
})