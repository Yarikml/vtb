import React, {useState} from 'react';
import { Share, StyleSheet, Text, View } from "react-native";
import Slider from '@react-native-community/slider';
import UserStore, {Paper} from '../../stores/UserStore';
import Dialog from 'react-native-dialog';
import {inject, observer} from 'mobx-react';

interface Props {
  papers: Paper[];
  onPress: () => void;
  user: UserStore;
  currentPaper: Paper;
  children: any
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2B46',
    justifyContent: 'center',
    height: '10%',
  },
  text: {paddingLeft: 16, color: '#C2D4EF'},
});

const SellTab: React.FunctionComponent<Props> = ({
  papers,
  onPress,
  user,
  children,
  currentPaper,
}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {}
  };
  const [amount, setAmount] = useState<number>(papers.length / 2);
  return (
    <View style={styles.container}>
      {children}
      <Text style={styles.text}>Сколько хотите продать?</Text>
      <Text style={styles.text}>{amount}</Text>
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
          setAmount(0);
          onPress();
        }}
        style={styles.text}
      />
      <Dialog.Button
        label="Поделиться с друзьями"
        onPress={() => onShare()}
        style={styles.text}
      />
    </View>
  );
};
export default inject('user')(observer(SellTab));
