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
    maxHeight: '50%',
  },
});

const TradeDialog: React.FunctionComponent<Props> = ({
  isVisible,
  onPress,
  papersByCompony,
  currentPaper,
}) => {
  return (
    <Dialog.Container
      useNativeDriver={true}
      visible={isVisible}
      onBackdropPress={onPress}
      contentStyle={{maxHeight: '60%'}}>
      <Tab.Navigator>
        <Tab.Screen
          name={'Продать'}
          children={() => (
            <SellTab papers={papersByCompony} onPress={onPress}               currentPaper={currentPaper}
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
    </Dialog.Container>
  );
};
export default TradeDialog;
