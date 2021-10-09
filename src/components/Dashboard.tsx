import React, { useState } from "react";
import {StyleSheet, Text, View} from 'react-native';
import IconHouse from '../assets/iconHouse.svg';
import * as Progress from 'react-native-progress';


const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1B2B46',
    opacity: 0.9,
  },
  goal: {
    flexDirection: 'row',
    alignContent: 'space-between',
    marginBottom: 25,
  },
  goalCaption: {
    color: '#fff',
  },
  goalLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    marginBottom: 25,
  },
  goalRight: {
    marginLeft: 'auto',
    justifyContent: 'center',
  },
  money: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moneyText: {
    color: '#fff',
  },
});

interface Props {
  money: number;
  moneyGoal: number;
}

const Dashboard: React.FunctionComponent<Props> = ({money, moneyGoal}) => {
  const getProgress = (money: number, moneyGoal: number): number => {
    let progress = (money * 100) / moneyGoal / 100;
    return progress;
  };

  return (
    <View style={styles.container}>
      <View style={styles.goal}>
        <View style={styles.goalLeft}>
          <IconHouse width={48} height={48} />
          <Text style={styles.goalCaption}>House</Text>
        </View>
        <View style={styles.goalRight}>
          <Text style={styles.goalCaption}>10 млн</Text>
        </View>
      </View>


      <Progress.Bar
        style={styles.progressBar}
        progress={getProgress(money, moneyGoal)}
        width={null}
        color={'blue'}
      />
      <View style={styles.money}>
        <Text style={styles.moneyText}>Ваши финансы</Text>
        <Text style={styles.moneyText}>{money}p</Text>
      </View>
    </View>
  );
};
export default Dashboard;
