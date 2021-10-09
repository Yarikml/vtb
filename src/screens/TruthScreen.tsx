import * as React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import MythCard from '../components/MythCard';
import Helper from '../components/Helper';

import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import MyButton from "../components/Button";
import Background from "../assets/backgroundTruthScreen.svg";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#172030',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 16,
        marginTop:34,
    },
    background: {
        position:'absolute',
        width: '100%',
        height: '100%',
    },
    text: {
        flexWrap: 'wrap',
        color: '#C2D4EF',
        fontSize: 24,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        lineHeight: 40,
        letterSpacing: 0,
    },
    textView: {
        marginHorizontal:24,
        paddingBottom:36,
        marginTop:24,
        alignItems:'center',
    },

});

const MythsScreens: React.FunctionComponent = () => {
    const myths = [
        {
            id: 1,
            text: 'Для начала достаточно будет небольшого вложения.',

        },
        {
            id: 2,
            text: 'За помощью всегда можно\n' +
                ' обратиться  за консультацией брокера.',

        },
        {
            id: 3,
            text: 'Сущеществует не так много инстурментов, чтобы долго ломать голову над выбором активов.',

        },
        {
            id: 4,
            text: 'Это не более рискованно, чем\n' +
                ' вождение автомобиля или плавание.',

        },
    ];


    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Background style={styles.background}/>

            <View style={styles.textView}>
                {myths.map(myth => (
                    <MythCard key={myth.id} icon={2} text={myth.text} />
                ))}
            </View>

            <MyButton nextState={'CardSetSelector'} text={'Попробуем инвестировать!'}/>

        </View>
    );
};
export default MythsScreens;
