import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Paper} from '../stores/UserStore';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1B2B46',
    opacity: 0.9,
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  company: {
    color: '#fff',
    padding: 5,
  },
  companyLogo: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 25,
    width: 25,
  },
  companyItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  userPapers: Paper[];
  companies: string[];
}

const BottomPanel: React.FunctionComponent<Props> = ({
  userPapers,
  companies,
}) => {
  return (
    <View style={styles.container}>
      {companies.map(company => {
        let companyPapers = userPapers.filter(
          paper => paper.company === company,
        );
        let companyPrises = companyPapers.map(paper => paper.price);
        let average =
          companyPrises.reduce((acc, cur) => acc + cur) / companyPrises.length;

        return (
          <View key={company} style={styles.companyItem}>
            <View style={styles.companyLogo}>
              <Text>{company}</Text>
            </View>
            <Text style={styles.company}>{Math.round(average)}р</Text>
          </View>
        );
      })}
    </View>
  );
};
export default BottomPanel;
