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
  touch: {
    height: 50,
    width: 50,
    backgroundColor: 'yellow',
    margin: 10,
  },
});

interface Props {
  user: UserStore;
}

const GameScreen: React.FunctionComponent<Props> = ({user}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [currentPaper, setPaper] = useState<Paper>(user.userPapers[0]);
//генерация - массив
  const curs = [123, 43, 45, 743, 212, 874, 12, 346, 765];

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
      <Button onPress={onShare} title="Share" />
      <View style={styles.gameScreen}>
        <Text />
        <TouchableOpacity
          style={styles.touch}
          key={1}
          onPress={() => {
            setPaper({company: 'Tesla', price: Math.random() * 67});
            setVisible(true);
          }}>
          <Text>Tesla</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          key={2}
          onPress={() => {
            setPaper({company: 'Dogi', price: Math.random() * 98});
            setVisible(true);
          }}>
          <Text>Dogi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          key={3}
          onPress={() => {
            setPaper({company: 'VTB', price: Math.random() * 76});
            setVisible(true);
          }}>
          <Text>VTB</Text>
        </TouchableOpacity>
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
