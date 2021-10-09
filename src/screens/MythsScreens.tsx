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
    backgroundColor: '#172030',
    flexDirection: 'column',
    justifyContent: 'center',

    justifyContent:'space-between',
    padding: 16,
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
    paddingBottom:36,
    alignItems:'center',
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
      text: '..большой стартовый капитал?',
      icon: 'df',
    },
    {
      id: 2,
      text: '..сложно и непонятно?',
      icon: 'df',
    },
    {
      id: 3,
      text: '..это много времени?',
      icon: 'df',
    },
    {
      id: 4,
      text: '..опасно?',
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

      <View style={styles.textView}>
        <Text style={styles.text}>
          Ты тоже думаешь,
        </Text>
        <Text style={styles.text}>
          что инвестиции - это...
        </Text>
      </View>
      <View style={styles.textView}>
        {myths.map(myth => (
            <MythCard key={myth.id} icon={myth.icon} text={myth.text} />
        ))}
      </View>


      <Button
        title={'А так ли на самом деле?'}
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
