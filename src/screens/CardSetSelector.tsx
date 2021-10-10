import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Helper from '../components/Helper';
import Background from '../assets/backgroundCardSetSelector.svg';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172030',
    padding: 16,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    justifyContent: 'space-between',
  },
  text: {
    marginTop: 24,
    paddingTop: 64,
    textAlign: 'center',
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
    paddingBottom: 64,
    marginTop: 20
  },
  cardGame: {
    backgroundColor: '#1B2B46',
    padding: 10,
    width: 150,
    height: 200,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#326DC6',
    borderWidth: 1,
    borderRadius: 10,
  },
  textCard: {
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
      zIndex: 100,
      transform: [{translateY: withSpring(offset.value)}],
    };
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animated.View style={[defaultSpringStyles, styles.animated]}>
        <Helper text={'У тебя всё получится!'} />
      </Animated.View>
      <Background style={styles.background} />
      <View style={styles.rules}>
        <View>
          <Text style={styles.textTitle}>Что нужно делать?</Text>
          <Text style={styles.text}>
            Правила просты:{'\n'} попробуй себя в любой роли.
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.navigate('GameScreen')}>
            <View style={styles.cardGame}>
              <Text style={styles.textCard}>"Трейдер"</Text>
              <Text style={styles.textCard}>если любишь риски</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.cardGame}>
            <Text style={styles.textCard}>"Инвестор"</Text>
            <Text style={styles.textCard}>если любишь расчеты</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardSetSelector;
