import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
    marginTop: 150,
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
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
      <Animated.View style={[styles.animated, defaultSpringStyles]}>
        <Helper text={'Hello, I think that many people have bounds in inv'} />
      </Animated.View>
      <View style={styles.rules}>
        <Text style={styles.text}>Правила игры:</Text>
        <Text style={styles.text} />
        <Text style={styles.text} />
      </View>
    </View>
  );
};
export default CardSetSelector;
