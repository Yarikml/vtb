import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ItemGoal from '../components/ItemGoal';
import MyButton from '../components/Button';
import Slider from '@react-native-community/slider';
import {inject, observer} from 'mobx-react';

import Logo from '../assets/logo.svg';
import Back from '../assets/back.svg';

import {useState} from 'react';
import UserStore from '../stores/UserStore';

interface Props {
  user: UserStore;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  back: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  logo: {
    paddingTop: 30,
    paddingRight: 15,
    alignItems: 'flex-end',
  },

  hello: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 65,
    paddingBottom: 30,
  },

  titleText: {
    color: '#C2D4EF',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    lineHeight: 40,
    letterSpacing: 0,
    textAlign: 'center',
  },

  textWelcome: {
    flexWrap: 'wrap',
    color: '#C2D4EF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    paddingBottom: 40,
    textAlign: 'center',
    paddingLeft: 25,
    fontSize: 24,
    lineHeight: 36,
  },

  blockQuest: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },

  text: {
    color: '#C2D4EF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 36,
    paddingLeft: 25,
    paddingBottom: 15,
  },
  sliderText: {
    color: '#C2D4EF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
  },

  input: {
    width: '90%',
    height: 52,
    backgroundColor: '#7EABF0',
    borderRadius: 20,
    padding: 10,
    color: '#172030',
    fontSize: 24,
  },
  slider: {
    width: '90%',
    paddingTop: 20,
    paddingBottom: 40,
  },

  goals: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  button: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#3A83F1',
    borderRadius: 20,
    marginVertical: 20,
  },
});

export const goals = [
  {
    id: 1,
    imgId: 1,
    goal: 100000,
    caption: 'PC',
  },
  {
    id: 2,
    imgId: 2,
    goal: 500000,
    caption: 'Обучение',
  },
  {
    id: 3,
    imgId: 3,
    goal: 1000000,
    caption: 'Машина',
  },
  {
    id: 4,
    imgId: 4,
    goal: 7000000,
    caption: 'House',
  },
];

const InitScreen: React.FunctionComponent<Props> = ({user}) => {
  const [sliderValue, setSliderValue] = useState(10000);
  const [currentGoal, setCurrentGoal] = useState<number>(1);
  const [text, setText] = useState<string>('');

  return (
    <ScrollView>
      <Back style={styles.background} />

      <View style={styles.logo}>
        <Logo width={175.44} height={60.08} />
      </View>
      <View style={styles.hello}>
        <Text style={styles.titleText}>Привет!</Text>
      </View>

      <View>
        <Text style={styles.textWelcome}>
          Классно, что ты решил разобраться с этим!
        </Text>
      </View>

      <View style={styles.blockQuest}>
        <Text style={styles.text}>Как тебя зовут?</Text>
        <TextInput
          onChangeText={value => setText(value)}
          style={styles.input}
          placeholder="Ведите Ваше имя"
          placeholderTextColor="#C2D4EF"
          maxLength={15}
          textAlign={'center'}
        />
      </View>

      <View style={styles.blockQuest}>
        <Text style={styles.text}>С чего начнем?</Text>
        <Slider
          style={styles.slider}
          minimumValue={5000}
          maximumValue={100000}
          step={1000}
          thumbTintColor="#7EABF0"
          minimumTrackTintColor="#7EABF0"
          maximumTrackTintColor="rgba(126, 171, 240, 0.5)"
          value={sliderValue}
          onValueChange={value => setSliderValue(value)}
        />
        <Text style={styles.sliderText}>{sliderValue}</Text>
      </View>

      <View style={styles.blockQuest}>
        <Text style={styles.text}>Выбери сложность</Text>
        <View style={styles.goals}>
          {goals.map(goalCard => (
            <TouchableOpacity onPress={() => setCurrentGoal(goalCard.id)}>
              <ItemGoal
                isSelected={currentGoal === goalCard.id}
                key={goalCard.id}
                idImg={goalCard.imgId}
                goal={goalCard.goal}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <MyButton
        onPress={() => {
          user.setMoney(sliderValue);
          user.setMoneyGoal(currentGoal);
          user.setName(text);
        }}
        nextState={'CardSetSelector'}
        text={'Начинаем'}
      />
    </ScrollView>
  );
};
export default inject('user')(observer(InitScreen));
