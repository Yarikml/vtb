import {View, Image, Text, StyleSheet} from "react-native";
import * as React from "react";

interface Props {
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

const ItemGoal: React.FunctionComponent<Props> = ({goal}) => {
    return (
       <View style={styles.goal}>
           <Image
               style={styles.image}
               source={{
                   uri: 'https://reactnative.dev/img/tiny_logo.png',
               }}
           />
           <Text style={styles.text}>{goal}</Text>
       </View>
    )
}
export default ItemGoal;