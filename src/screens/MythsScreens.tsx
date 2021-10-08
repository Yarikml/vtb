import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import MythCard from "../components/MythCard";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 140,
    backgroundColor: '#1B2B46',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
    color: 'red'
  }
})

const MythsScreens: React.FunctionComponent = () => {
  const myths = [
    {
      id: 1,
      text: 'Инвестциии - это сложно',
      icon: 'df'
  },
    {
      id: 2,
      text: 'Я могу всё потерять - это опано для моего капиала',
      icon: 'df'
    },
    {
      id: 3,
      text: 'Этим занимаются только те, у кого есть деньги',
      icon: 'df'
    },
  ]

  return (
    <View style={styles.container}>
      {
        myths.map(myth => <MythCard key={myth.id} icon={myth.icon} text={myth.text} />)
      }
    </View>
)
}
export default MythsScreens;
