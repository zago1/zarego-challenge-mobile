import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={() => <Text>First Screen</Text>} />
        <Stack.Screen name="Second" component={() => <Text>Second Screen</Text>} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}