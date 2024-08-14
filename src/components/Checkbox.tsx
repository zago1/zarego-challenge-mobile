import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  checked: boolean; 
  onChange(): void;
}

const Checkbox = ({ checked, onChange }: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.container, checked && styles.checked]}
      onPress={onChange}
    >
      { checked && <MaterialCommunityIcons name="check" size={20} color="white" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: 'transparent',
  },
  checked: {
    backgroundColor: '#000',
    borderColor: '#000'
  },
})

export { Checkbox }