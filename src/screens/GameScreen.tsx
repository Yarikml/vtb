import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Dashboard from '../components/Dashboard';
import BottomPanel from '../components/BottomPanel';
import {inject, observer} from 'mobx-react';
import UserStore from '../stores/UserStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172030',
    flexDirection: 'column',
  },
  gameScreen: {
    backgroundColor: 'white',
    flex: 1,
  },
});

interface Props {
  user: UserStore;
}

const GameScreen: React.FunctionComponent<Props> = ({user}) => {
  return (
    <View style={styles.container}>
      <Dashboard money={user.money} moneyGoal={user.moneyGoal} />
      <View style={styles.gameScreen}>
        <Button
          title={'Tesla'}
          onPress={() =>
            user.addPaperToUser({company: 'Tesla', price: Math.random() * 100})
          }
        />
        <Button
          title={'Sber'}
          onPress={() =>
            user.addPaperToUser({company: 'Sber', price: Math.random() * 100})
          }
        />

        <Button
          title={'Dogi'}
          onPress={() =>
            user.addPaperToUser({company: 'Dogi', price: Math.random() * 100})
          }
        />
        <Button
          title={'Inu'}
          onPress={() =>
            user.addPaperToUser({company: 'Inu', price: Math.random() * 100})
          }
        />
        <Text style={{color: 'black'}}>{JSON.stringify(user.userPapers)}</Text>
      </View>
      <BottomPanel userPapers={user.userPapers} companies={user.getCompanies} />
    </View>
  );
};
export default inject('user')(observer(GameScreen));
