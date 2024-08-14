import { FlatList } from  'react-native';
import { CountryItem } from './CountryItem';
import { Country } from '../data/interfaces/Country';

type Props = { 
  countries: Country[];
  onCountrySelected(id: number): void;
}

const CountryList = ({ countries, onCountrySelected }: Props) => {
  return (
    <FlatList
      style={{ marginTop: 16 }}
      data={countries}
      keyExtractor={(item) => `${item.country_name}-${item.id}`}
      contentContainerStyle={{ gap: 16 }}
      renderItem={({ item }) => 
        <CountryItem country={item} 
          onPress={() => onCountrySelected(item.id)} 
        />
      }
    />
  )
}

export { CountryList };