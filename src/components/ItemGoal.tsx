import {View, Image, Text, StyleSheet} from "react-native";
import * as React from "react";

import ImgAuto from "../assets/goals/auto.svg"
import ImgHouse from "../assets/goals/house.svg"
import ImgStudy from "../assets/goals/study.svg"
import ImgMonitor from "../assets/goals/monitor.svg"

interface Props {
    idImg: number
    goal: string
}


const styles = StyleSheet.create({
    goal: {
        backgroundColor: '#1B2B46',
        padding:10,
        width:'40%',
        margin: 10,
        alignItems: 'center',
        borderColor: '#326DC6',
        borderWidth: 1,
        borderRadius: 10

    },
    text:{
        color: '#C2D4EF',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 42,
    },

    image:{
        width: 50,
        height: 50,
        flex:1,
        justifyContent: 'center',
    },
})

const ItemGoal: React.FunctionComponent<Props> = ({idImg, goal}) => {


    return (
       <View style={styles.goal}>

           {{
               1: <ImgMonitor width={45} height={40}/>,
               2: <ImgStudy width={45} height={40}/>,
               3: <ImgAuto width={45} height={40}/>,
               4: <ImgHouse width={45} height={40}/>,
           }[idImg]
           }

           <Text style={styles.text}>{goal}</Text>
       </View>
    )
}
export default ItemGoal;