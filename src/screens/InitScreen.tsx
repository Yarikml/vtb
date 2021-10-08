import * as React from "react";
import {Text, View, StyleSheet, TextInput, ScrollView, Image, Button, SafeAreaView} from "react-native";
import ItemGoal from '../components/ItemGoal';
import Slider from '@react-native-community/slider';

interface Props {

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#172030',
        paddingHorizontal: 16,
        paddingVertical:12,

    },

    logo: {
        paddingTop: 45,
        paddingRight: 55,
        alignItems: 'flex-end'
    },

    hello: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingTop: 100,
        paddingBottom: 40,

    },

    titleText:{
        color: '#C2D4EF',
        fontSize: 32,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        lineHeight: 40,
        letterSpacing: 0,
        textAlign: 'center',
    },

    textWelcome:{
        flexWrap: 'wrap',
        color: '#C2D4EF',
        fontSize: 32,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        lineHeight: 40,
        letterSpacing: 0,
    },

    blockQuest: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 40,
        paddingBottom: 40,
    },

    text:{
        color: '#C2D4EF',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 28,
        lineHeight: 42,
        paddingLeft: 25,
    },


    input: {
        width:'90%',
        height: 60,
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: '#7EABF0',
        borderRadius: 20,

        underlineColorAndroid: '#172030',

    },
    slider: {
        width:'90%',
        height: 60,
        paddingTop: 20,
        paddingBottom: 40,
        borderRadius: 20,
    },

    goals: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

    button: {
        height: 60,
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: '#7EABF0',
        borderRadius: 20,
        marginVertical:20,
    }


})

const InitScreen: React.FunctionComponent<Props> = () => {
    const goals = [
        {
            goal: '8000 000'
        },
        {
            goal: '500 000'
        },
        {
            goal: '7 000 000'
        },
        {
            goal: '100 000'
        },
    ]

  return (
    <ScrollView style={styles.container}>
       <View style={styles.logo}>
           <Image
               style={{width: 150,
                   height: 50,}}
               source={{
                   uri: 'https://reactnative.dev/img/tiny_logo.png',
               }}
           />
      </View>
      <View style={styles.hello}>
        <Text style={styles.titleText}>
            Привет!
        </Text>
      </View>

        <View>
            <Text style={styles.textWelcome}>
                Классно, что ты решил разобраться с этим!
            </Text>
        </View>

        <View style={styles.blockQuest}>
            <Text style={styles.text}>
                Как тебя зовут?
            </Text>
            <TextInput
                style={styles.input}
            />
        </View>


        <View style={styles.blockQuest}>
            <Text style={styles.text}>
                С чего начнем?
            </Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
        </View>

        <View style={styles.blockQuest}>
            <Text style={styles.text}>Выбери сложность</Text>
            <View style={styles.goals}>
                {goals.map(goal => <ItemGoal goal={goal.goal}  />)}
            </View>
        </View>


            <Button style = {styles.button}
                    title="Начинаем"
            />


    </ScrollView>
  )
}
export default InitScreen;
