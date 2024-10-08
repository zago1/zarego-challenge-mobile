import { useContext } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Screen } from "../components/Screen";
import { PageHeader } from "../components/PageHeader";
import { CountriesContext } from "../data/contexts/CountriesContext";
import { CountryList } from "../components/CountryList";
import { Button } from "../components/Button";
import { Page } from "../components/Page";
import { PageProps } from "../data/interfaces/PageProps";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export const ChooseCountry = ({ navigation }: NativeStackScreenProps<PageProps>) => {
  const {
    countries,
    selectedCountries,
    loading,
    error,
    selectCountry,
    loadMore,
    loadCountries,
  } = useContext(CountriesContext);

  const handlePress = () => {
    navigation.navigate("ResultData");
  }

  const handleRetry = () => {
    loadCountries();
  }

  return (
    <Screen>
      <Page>
        <PageHeader step={1} title="Choose country" gradient />
        <Text style={styles.text}>You can choose one or more countries.</Text>
        { 
          (loading && !countries.length) 
            ? <Loading style={styles.marginTop} /> 
            : error 
              ? <Error retry={handleRetry} /> 
              : <CountryList
                loading={loading}
                style={styles.marginTop}
                countries={countries}
                onCountrySelected={selectCountry} 
                onEndReached={loadMore}
              />
        }
      </Page>
      <Footer>
        <Button
          text="Apply and see data"
          onPress={handlePress}
          disabled={!selectedCountries.length} 
        />
      </Footer>
    </Screen>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    marginTop: 16,
    fontSize: 18
  },
  buttonContainer: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginTop: {
    marginTop: 16
  }
});