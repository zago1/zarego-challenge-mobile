import React from 'react';
import { Text } from "react-native";

interface CountryItem {
  name: string;
}

const CountryItem = ({ name }: CountryItem) => {
  return (
    <Text>{name}</Text>
  )
}

export { CountryItem };