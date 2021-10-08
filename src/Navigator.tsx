import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import InitScreen from "./screens/InitScreen";
import MythsScreens from "./screens/MythsScreens";

const Stack = createNativeStackNavigator();

const Navigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={"MythsScreen"}
    >
      <Stack.Screen
        name={"Init"}
        component={InitScreen}
        options={{title: "Начальный экран"}}
      />
      <Stack.Screen
        name={"MythsScreen"}
        component={MythsScreens}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
export default Navigator;
