import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Dashboard from "../components/Dashboard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172030',
  },

});

const GameScreen: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
};
export default GameScreen;
