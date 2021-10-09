import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Dashboard from '../components/Dashboard';
import BottomPanel from '../components/BottomPanel';
import {inject, observer} from 'mobx-react';
import UserStore, {Paper} from '../stores/UserStore';
import Dialog from 'react-native-dialog';
import TradeDialog from '../components/TradeDialog';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import PaperBall from '../components/Paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172030',
    flexDirection: 'column',
  },
  gameScreen: {
    backgroundColor: 'white',
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
  //генерация - массив
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

  return (
    <View style={styles.container}>
      <Dashboard money={user.money} moneyGoal={user.moneyGoal} />
      <Button onPress={() => {}} title="Share" />
      <View style={styles.gameScreen}>
        <Text>{currentPaper.company}</Text>

        {balls.map(ball => (
          <PaperBall
            company={ball.company}
            price={ball.price}
            onPress={() => {
              setPaper(ball);
              setVisible(true)
            }}
          />
        ))}
      </View>
      <TradeDialog
        papersByCompony={user.filterByCompany(currentPaper.company)}
        isVisible={isVisible}
        onPress={() => setVisible(false)}
        currentPaper={currentPaper}
      />
      <BottomPanel userPapers={user.userPapers} companies={user.getCompanies} />
    </View>
  );
};
export default inject('user')(observer(GameScreen));
