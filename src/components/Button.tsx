import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

interface Props {
  nextState: string;
  text: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A83F1',
    borderRadius: 20,
    marginVertical: 20,
    padding: 8,
  },
  text: {
    color: '#C2D4EF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 42,
  },
});

const Button: React.FunctionComponent<Props> = ({nextState, text, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        onPress();
        navigation.navigate(nextState);
      }}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
