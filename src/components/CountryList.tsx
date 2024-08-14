import { FlatList, StyleSheet, ViewStyle } from  'react-native';
import { CountryItem } from './CountryItem';
import { Country } from '../data/interfaces/Country';
import { Loading } from './Loading';

type Props = { 
  countries: Country[];
  onEndReached?: (info: { distanceFromEnd: number }) => void | null;
  onCountrySelected(id: number): void;
  loading?: boolean;
  style?: ViewStyle;
}

const CountryList = ({ 
  countries,
  loading,
  onCountrySelected,
  onEndReached,
  style 
}: Props) => {
  return (
    <FlatList
      style={style}
      data={countries}
      onEndReached={onEndReached}
      onEndReachedThreshold={0}
      keyExtractor={(item) => `${item.country_name}-${item.id}`}
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={({ item }) => 
        <CountryItem country={item} 
          onPress={() => onCountrySelected(item.id)} 
        />
      }
      ListFooterComponent={() => loading ? <Loading /> : null}
    />
  )
}

export { CountryList };

const styles = StyleSheet.create({
  contentContainerStyle: { gap: 16 }
})