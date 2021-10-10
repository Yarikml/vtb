import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface Props {
  company: string;
  price: number;
  onPress: () => void;
}

const styles = StyleSheet.create({
  ball: {
    backgroundColor: '#1B2B46',
    borderRadius: 50,
    position: 'absolute',
    height: 25,
    width: 25,
    borderColor: '#224273',
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: '#C2D4EF',
    fontSize: 8,
  },
});

const Paper: React.FunctionComponent<Props> = ({company, price, onPress}) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  const scale = useSharedValue(0);
  const height = useSharedValue(0);
  const width = useSharedValue(0);

  const left = useSharedValue(95);
  const top = useSharedValue( 50);

  useEffect(() => {
    setTimeout(() => {
      scale.value = 2;
      left.value = 295 * Math.random();
      top.value = 340 * Math.random();

      //  width.value = 50;
      //   height.value = 50;
    }, 1000);

    return () => {
      scale.value = 0;
      //    width.value = 0;
      //  height.value = 0;
    };
  });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      left: left.value,
      top: top.value,
      /* width: withSpring(width.value, {
        damping: 20,
        stiffness: 90,
      }),
      height: withSpring(height.value, {
        damping: 20,
        stiffness: 90,
      }),*/
      transform: [
        {
          scale: withSpring(scale.value, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });
  return (
    <AnimatedTouchable style={[animatedStyles]} onPress={onPress}>
      <View style={styles.ball}>
        <Text style={styles.text}>{company}</Text>
      </View>
      <View style={{top: 25, left: 8}}>
        <Text style={styles.text}>{Math.floor(price)}</Text>
      </View>
    </AnimatedTouchable>
  );
};
export default Paper;
