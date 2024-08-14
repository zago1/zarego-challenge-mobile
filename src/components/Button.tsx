import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
  disabled?: boolean;
  onPress(): void;
}

const Button = ({ text, onPress, disabled }: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.button, disabled && styles.disabledButton]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[styles.buttonText, disabled && styles.disabledText]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 16
  },
  disabledButton: {
    borderColor: '#868788' 
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700'
  },
  disabledText: {
    color: '#868788'
  },
})


export { Button }