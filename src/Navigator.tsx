import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import CardSetSelector from './screens/CardSetSelector';
import GameScreen from './screens/GameScreen';
import InitScreen from './screens/InitScreen';
import MythsScreens from './screens/MythsScreens';

const Stack = createNativeStackNavigator();

const Navigator: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName={'GameScreen'}>
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
      <Stack.Screen
        name={'GameScreen'}
        component={GameScreen}
        options={{headerShown: false, orientation: 'portrait'}}
      />
    </Stack.Navigator>
  );
};
export default Navigator;
