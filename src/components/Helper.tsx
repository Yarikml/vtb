import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  text: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',


  },
  icon: {
    backgroundColor: 'red',
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  message: {
    padding: 16,
    backgroundColor: '#C2D4EF',
    marginLeft: 12,
    position: "relative",
    maxWidth: '80%',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,




  },
  triangle: {
    position: "absolute",
    height: 15,
    width: 15,
    left: -7,
    borderWidth: 7,
    borderTopWidth: 7,
    borderTopColor: '#1B2B46',
    borderColor: 'transparent',

  },
  text: {
    color: '#1B2B46'
  }
})
const Helper: React.FunctionComponent<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon} />
      <View style={styles.message}>
        <Text style={styles.text}>
          {text}
        </Text>
        <View style={styles.triangle}></View>
      </View>


    </View>
  )
}
export default Helper
