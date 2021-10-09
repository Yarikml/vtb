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
  const [userPapers, setPapers] = useState<{company: string; price: number}[]>(
    [],
  );
  const [count, add] = useState(0);
  const addTesla = () => {
    let temp = userPapers;
    temp.push({
      company: 'Tesla',
      price: 400,
    });

    setPapers(temp);
  };

  const addSber = () => {
    let temp = userPapers;
    temp.push({
      company: 'Sber',
      price: 400,
    });

    setPapers(temp);
  };

  const addDogi = () => {
    let temp = userPapers;
    temp.push({
      company: 'Dogi',
      price: 400,
    });

    setPapers(temp);
  };

  const addInu = () => {
    let temp = userPapers;
    temp.push({
      company: 'Inu',
      price: 400,
    });

    setPapers(temp);
  };

  return (
    <View style={styles.container}>
      <Dashboard />
      <View style={styles.gameScreen}>
        <Button
          title={'Tesla'}
          onPress={() => user.addPaperToUser({company: 'Tesla', price: 300})}
        />
        <Button
          title={'Sber'}
          onPress={() => user.addPaperToUser({company: 'Sber', price: 300})}
        />

        <Button
          title={'Dogi'}
          onPress={() => user.addPaperToUser({company: 'Dogi', price: 300})}
        />
        <Button
          title={'Inu'}
          onPress={() => user.addPaperToUser({company: 'Inu', price: 300})}
        />
        <Text style={{color: 'black'}}>{JSON.stringify(user.userPapers)}</Text>
      </View>
      <BottomPanel userPapers={userPapers} />
    </View>
  );
};
export default inject('user')(observer(GameScreen));
