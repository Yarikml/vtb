import React from 'react';
import Dialog from 'react-native-dialog';

interface Props {
  isVisible: boolean;
  onPress: () => void;
  papersByCompony: Paper[];
  currentPaper: Paper;
}
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SellTab from './Tabs/SellTab';
import BuyTab from './Tabs/BuyTab';
import {Button, StyleSheet, View} from 'react-native';
import {Paper} from '../stores/UserStore';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  dialogContainer: {
    maxHeight: '30%',
  },
});

const TradeDialog: React.FunctionComponent<Props> = ({
  isVisible,
  onPress,
  papersByCompony,
  currentPaper,
}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, color: '#C2D4EF'},
        tabBarStyle: {backgroundColor: '#1B2B46'},
      }}>
      <Tab.Screen
        name={'Продать'}
        children={() => (
          <SellTab
            papers={papersByCompony}
            onPress={onPress}
            currentPaper={currentPaper}
          />
        )}
      />
      <Tab.Screen
        name={'Купить'}
        children={() => (
          <BuyTab
            papers={papersByCompony}
            onPress={onPress}
            currentPaper={currentPaper}
          />
        )}
      />
    </Tab.Navigator>
  );
};
export default TradeDialog;
