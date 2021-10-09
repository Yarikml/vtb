import * as React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import MythCard from '../components/MythCard';
import Helper from '../components/Helper';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 140,
    backgroundColor: '#172030',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    color: 'red',
  },
  animated: {
    position: 'absolute',
    zIndex: 10,
    top: -70,
    left: 25,
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
  },
});

const MythsScreens: React.FunctionComponent = () => {
  const myths = [
    {
      id: 1,
      text: 'Инвестциии - это сложно',
      icon: 'df',
    },
    {
      id: 2,
      text: 'Я могу всё потерять - это опано для моего капиала',
      icon: 'df',
    },
    {
      id: 3,
      text: 'Этим занимаются только те, у кого есть деньги',
      icon: 'df',
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      offset.value = 80;
    }, 3000);
  });
  const offset = useSharedValue(0);
  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: withSpring(offset.value)}],
    };
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animated, defaultSpringStyles]}>
        <Helper text={'Hello, I think that many people have bounds in inv'} />
      </Animated.View>
      {myths.map(myth => (
        <MythCard key={myth.id} icon={myth.icon} text={myth.text} />
      ))}
      <Button
        title={'push'}
        onPress={() => {
          requestAnimationFrame(() => {
            offset.value = -80;

            navigation.navigate('CardSetSelector');
          });
        }}
      />
    </View>
  );
};
export default MythsScreens;
