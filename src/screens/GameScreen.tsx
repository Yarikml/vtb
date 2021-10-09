import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
});

interface Props {
  user: UserStore;
}

const GameScreen: React.FunctionComponent<Props> = ({user}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [currentPaper, setPaper] = useState<Paper>(user.userPapers[0]);
  return (
    <View style={styles.container}>
      <Dashboard money={user.money} moneyGoal={user.moneyGoal} />

      <View style={styles.gameScreen}>
        <TouchableOpacity
          key={1}
          onPress={() => {
            setPaper({company: 'Tesla', price: Math.random() * 100});
            setVisible(true);
          }}>
          <Text>Tesla</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={2}
          onPress={() => {
            setPaper({company: 'Dogi', price: Math.random() * 100});
            setVisible(true);
          }}>
          <Text>Dogi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={3}
          onPress={() => {
            setPaper({company: 'VTB', price: Math.random() * 100});
            setVisible(true);
          }}>
          <Text>VTB</Text>
        </TouchableOpacity>

        <Text>{JSON.stringify(user.userPapers)}</Text>
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
