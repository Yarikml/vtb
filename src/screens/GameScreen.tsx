import React, {useEffect, useRef, useState} from 'react';
import {Button, Share, StyleSheet, Text, View} from 'react-native';
import Dashboard from '../components/Dashboard';
import BottomPanel from '../components/BottomPanel';
import {inject, observer} from 'mobx-react';
import UserStore, {Paper} from '../stores/UserStore';
import TradeDialog from '../components/TradeDialog';
import PaperBall from '../components/Paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172030',
    flexDirection: 'column',
  },
  gameScreen: {
    backgroundColor: '#172030',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  touch: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    margin: 10,
    borderRadius: 50,
  },
});

interface Props {
  user: UserStore;
}

const GameScreen: React.FunctionComponent<Props> = ({user}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [currentPaper, setPaper] = useState<Paper>(user.userPapers[0]);

  const [balls, setBalls] = useState<Paper[]>([
    {
      company: 'Tesla',
      price: Math.random() * 100,
    },
    {
      company: 'Dogi',
      price: Math.random() * 100,
    },
    {
      company: 'VTB',
      price: Math.random() * 100,
    },
  ]);
  const curs = [
    {
      company: 'Tesla',
      price: Math.random() * 100,
    },
    {
      company: 'Dogi',
      price: Math.random() * 100,
    },
    {
      company: 'VTB',
      price: Math.random() * 100,
    },
  ];

  useEffect(() => {
    let timerId = setTimeout(function tick() {
      setBalls(curs);
      timerId = setTimeout(tick, 4000); // (*)
    }, 4000);
    return () => {
      clearTimeout(timerId);
    };
  });


  return (
    <View style={styles.container}>
      <Dashboard
        money={user.money}
        moneyGoal={user.moneyGoal}
        name={user.name}
      />

      <View style={styles.gameScreen}>
        <Text style={{ color: '#C2D4EF'}}>{currentPaper.company}</Text>

        {balls.map(ball => (
          <PaperBall
            company={ball.company}
            price={ball.price}
            onPress={() => {
              setPaper(ball);
              setVisible(true);
            }}
          />
        ))}
      </View>
      <TradeDialog
        papersByCompony={user.filterByCompany(currentPaper.company)}
        isVisible={isVisible}
        onPress={() => setVisible(false)}
        currentPaper={currentPaper}
        children={() => (
          <BottomPanel
            userPapers={user.userPapers}
            companies={user.getCompanies}
          />
        )}
      />
    </View>
  );
};
export default inject('user')(observer(GameScreen));
