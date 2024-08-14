import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Checkbox } from './Checkbox';

import { Country } from '../data/interfaces/Country';

type Props = {
  country: Country;
  onPress(): void;
}

const CountryItem = ({ country, onPress }: Props) => {
  const selected = country.selected;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, selected && styles.containerSelected]}>
      <Checkbox checked={selected} onChange={() => {}} />
      <Text style={[styles.text, selected && styles.selectedText ]}>{country.country_name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#393939',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 16,
    gap: 10
  },
  containerSelected: {
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 20,
    color: '#FFF'
  },
  selectedText: {
    color: '#000',
  }
});

export { CountryItem };