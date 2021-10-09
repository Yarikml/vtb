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
import {Provider} from 'mobx-react';
import {stores} from './stores/Stores';

const App: () => Node = () => {
  return (
    <Provider {...stores}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
