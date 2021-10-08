import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import InitScreen from "./screens/InitScreen";

const Stack = createNativeStackNavigator();

const Navigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Init"}
        component={InitScreen}
        options={{title: "Начальный экран"}}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}
export default Navigator;
