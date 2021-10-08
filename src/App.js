/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from '../../vtb/src/Navigator';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
