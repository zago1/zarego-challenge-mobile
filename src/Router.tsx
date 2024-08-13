import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ChooseCountry } from "./pages/ChooseCountry";
import { ResultData } from "./pages/ResultData";

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChooseCountry" component={ChooseCountry} />
        <Stack.Screen name="ResultData" component={ResultData} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}