import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import LoginScreen from "../modules/auth/LoginScreen";
import RegisterScreen from "../modules/auth/RegisterScreen";
const Stack = createNativeStackNavigator();

function Placeholder() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>AI Learning App Base Ready 🚀</Text>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
   <Stack.Screen name="Login" component={LoginScreen} />
   <Stack.Screen name="Register" component={RegisterScreen} />
   <Stack.Screen name="Onboarding" component={Placeholder} />
</Stack.Navigator>
    </NavigationContainer>
  );
}
