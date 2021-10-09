import * as React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import MythCard from '../components/MythCard';
import Helper from '../components/Helper';

import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import MyButton from '../components/Button';
import Background from '../assets/backgroundMythScreen.svg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172030',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 16,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textTitle: {
    marginHorizontal: 24,
    paddingBottom: 36,
    marginTop: 12,
    alignItems: 'center',
  },
  text: {
    flexWrap: 'wrap',
    color: '#C2D4EF',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    lineHeight: 40,
    letterSpacing: 0,
  },
  textView: {
    marginHorizontal: 24,
    paddingBottom: 36,
    marginTop: 24,
    alignItems: 'center',
  },
});

const MythsScreens: React.FunctionComponent = () => {
  const myths = [
    {
      id: 1,
      text: '..большой стартовый капитал?',
      icon: 1,
    },
    {
      id: 2,
      text: '..сложно и непонятно?',
      icon: 1,
    },
    {
      id: 3,
      text: '..это много времени?',
      icon: 1,
    },
    {
      id: 4,
      text: '..опасно?',
      icon: 1,
    },
  ];

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <View style={styles.textTitle}>
        <Text style={styles.text}>Ты тоже думаешь,</Text>
        <Text style={styles.text}>что инвестиции - это...</Text>
      </View>
      <View style={styles.textView}>
        {myths.map(myth => (
          <MythCard key={myth.id} icon={1} text={myth.text} />
        ))}
      </View>

      <MyButton
        nextState={'TruthScreen'}
        text={'А так ли это на самом деле?'}
      />
    </View>
  );
};
export default MythsScreens;
