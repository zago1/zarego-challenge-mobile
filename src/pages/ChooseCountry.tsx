import { Screen } from "../components/Screen";
import { PageHeader } from "../components/PageHeader";
import { FlatList, Text } from "react-native";
import { CountryItem } from "../components/CountryItem";

export const ChooseCountry = () => {

  return (
    <Screen>
      <PageHeader title="Choose country" />
      <Text>You can choose one or more countries.</Text>
      <FlatList
        data={['Brazil', 'Argentina', 'Chile']}
        renderItem={({ item }) => <CountryItem name={item} />}
      />
    </Screen>
  )
}