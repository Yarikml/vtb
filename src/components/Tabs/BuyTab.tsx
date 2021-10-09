import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserStore, {Paper} from '../../stores/UserStore';
import Slider from '@react-native-community/slider';
import Dialog from 'react-native-dialog';
import {inject, observer} from 'mobx-react';

interface Props {
  papers: Paper[];
  onPress: () => void;
  currentPaper: Paper;
  user: UserStore;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
  },
});

const BuyTab: React.FunctionComponent<Props> = ({
  papers,
  onPress,
  currentPaper,
  user,
}) => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Сколько хотите купить?</Text>
      <Text>{amount}</Text>
      <Text>{JSON.stringify(currentPaper)}</Text>
      <Slider
        onValueChange={value => setAmount(Math.round(value))}
        minimumValue={0}
        maximumValue={100}
        style={{height: 50}}
      />
      <Dialog.Button

        label="Совершить сделку"
        onPress={() => {
          user.buyPaper(currentPaper, amount);
          setAmount(0)
          onPress();
        }}
      />
    </View>
  );
};
export default inject('user')(observer(BuyTab));
