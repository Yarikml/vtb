import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import CardSetSelector from './screens/CardSetSelector';
import InitScreen from './screens/InitScreen';
import MythsScreens from './screens/MythsScreens';

const Stack = createNativeStackNavigator();

const Navigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName={'Init'}>
      <Stack.Screen
        name={'Init'}
        component={InitScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'MythsScreen'}
        component={MythsScreens}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'CardSetSelector'}
        component={CardSetSelector}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Navigator;
