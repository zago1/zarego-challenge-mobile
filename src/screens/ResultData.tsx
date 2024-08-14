import { useContext, useMemo } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Screen } from "../components/Screen";
import { CountryTable } from "../components/CountryTable";
import { CountriesContext } from "../data/contexts/CountriesContext";
import { Button } from "../components/Button";
import { PageHeader } from "../components/PageHeader";
import { Page } from "../components/Page";
import { Footer } from "../components/Footer";

import { formatCountriesToTableData } from "../utils";

const ResultData = () => {
  const { selectedCountries } = useContext(CountriesContext)

  const { headerTitles, tableRows } = useMemo(
    () => formatCountriesToTableData(selectedCountries), 
    [selectedCountries]
  );

  const handlePress = () => {}

  return (
    <Screen>
      <Page style={styles.pageContainer}>
        <PageHeader step={2} style={styles.pageHeader} title="Result Data" />
        <ScrollView horizontal style={styles.scrollview}>
          <CountryTable 
            style={styles.table}
            tableHeaders={headerTitles}
            tableRows={tableRows} 
          />
        </ScrollView>
      </Page>
      <Footer>
        <Button text="Download PDF" onPress={handlePress} />
      </Footer>
    </Screen>
  );
}

export { ResultData };

const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 0
  },
  pageHeader: {
    paddingHorizontal: 16 
  },
  scrollview: {
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 16,
    minWidth: '100%'
  },
  table: { marginRight: 16 }
})