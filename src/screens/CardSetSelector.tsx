import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Helper from '../components/Helper';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172030',
    padding: 16,

  },
  animated: {
    position: 'absolute',
    zIndex: 10,
    top: -70,
    left: 25,
  },
  rules: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
    alignContent: 'center',
    justifyContent:'space-between'
  },
  text: {
    textAlign: 'left',
    color: '#C2D4EF',
    fontSize: 20,
    lineHeight: 24,
  },
  textTitle: {
    flexWrap: 'wrap',
    color: '#C2D4EF',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    lineHeight: 36,
    letterSpacing: 0,
    textAlign: 'center',
    paddingBottom:64,
  },
  cardGame: {
    backgroundColor: '#1B2B46',
    padding:10,
    width:'40%',
    height: 200,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#326DC6',
    borderWidth: 1,
    borderRadius: 10

  },
  textCard:{
    color: '#C2D4EF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
  },

});

const CardSetSelector: React.FunctionComponent = () => {
  useEffect(() => {
    setTimeout(() => {
      offset.value = 80;
    }, 1000);
  });
  const offset = useSharedValue(0);
  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: withSpring(offset.value)}],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.rules}>
        <View>
          <Text style={styles.textTitle}>Давай попробуем понять, что такое акции и облигации.</Text>
          <Text style={styles.text}>Ниже ты найдешь два мини приложения, что помогут тебе войти в мир инвестиций.
            Эти инструменты не взаимоисключаемы, но мы их разделили, чтобы более точно донести идею каждого.</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
          <View style={styles.cardGame}>
            <Text style={styles.textCard}>Хочу
              скупать
              акции</Text>
          </View>
          <View style={styles.cardGame}>
            <Text style={styles.textCard}>Хочу
              вложиться
              в облигации</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardSetSelector;
