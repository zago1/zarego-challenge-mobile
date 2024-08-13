import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { ChooseCountry } from "./pages/ChooseCountry";
import { ResultData } from "./pages/ResultData";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

const navigationOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: '#000' },
  headerTitle: ''
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChooseCountry">
        <Stack.Screen 
          name="ChooseCountry"
          component={ChooseCountry}
          options={navigationOptions}
        />
        <Stack.Screen
          name="ResultData"
          component={ResultData}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;