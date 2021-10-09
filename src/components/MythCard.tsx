import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
// @ts-ignore
import MythRich from "../assets/mythKnowledge.svg"


interface Props {
  icon: any,
  text: string
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#234171',
    borderRadius: 10,
    flexDirection: 'row',
    flexGrow: 0,
    alignItems: 'center',
    marginBottom: 32,
  },
  text: {
    fontSize: 18,
    flex: 1,
    marginLeft: 24,
    color: '#E6EFFE'
  }
})

const MythCard: React.FunctionComponent<Props> = ({ icon, text}) => {
  return (
    <View style={styles.cardContainer}>
      <MythRich width={48} height={48} />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
export default MythCard;
