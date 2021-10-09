import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import UserStore, {Paper} from '../../stores/UserStore';
import Dialog from 'react-native-dialog';
import {inject, observer} from 'mobx-react';

interface Props {
  papers: Paper[];
  onPress: () => void;
  user: UserStore;
  currentPaper: Paper;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

const SellTab: React.FunctionComponent<Props> = ({
  papers,
  onPress,
  user,
  currentPaper,
}) => {
  const [amount, setAmount] = useState<number>(papers.length / 2);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Сколько хотите продать?</Text>
      <Text>{amount}</Text>
      <Slider
        onValueChange={value => setAmount(Math.round(value))}
        minimumValue={0}
        maximumValue={user.filterByCompany(currentPaper.company).length}
        style={{height: 50}}
      />
      <Dialog.Button
        label="Совершить сделку"
        onPress={() => {
          user.sellPaper(currentPaper, amount);
          setAmount(0)
          onPress();
        }}
      />
    </View>
  );
};
export default inject('user')(observer(SellTab));
