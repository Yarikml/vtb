import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1B2B46',
    opacity: 0.9,
    marginTop: 'auto',
  },
});

interface Props {
  userPapers: {company: string; price: number}[];
}

const BottomPanel: React.FunctionComponent<Props> = ({userPapers}) => {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(userPapers)}</Text>
      {userPapers
        .filter(item => item.company == 'Tesla')
        .map(item1 => (
          <Text>{item1.company}</Text>
        ))}
    </View>
  );
};
export default BottomPanel;
