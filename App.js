import React from 'react';
import database from '@react-native-firebase/database';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList, SectionList
} from 'react-native';

const reference = database().ref('/Students');

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayFlatList: [],
    };
  }

  componentDidMount() {
    database()
      .ref('/Students')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
        this.setState({ arrayFlatList: snapshot.val() });
      });

  //     database()
  // .ref('/users/123')
  // .set({
  //   name: 'Ada Lovelace',
  //   age: 31,
  // })
  // .then(() => console.log('Data set.'));
  // }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading1}>Quiz # 7 - Firebase - Section List</Text>
        <Text style={styles.heading2}>Fetch Date From Firebase</Text>
        <Text style={styles.flat}>Section List</Text>

<SectionList

        sections={this.state.arrayFlatList}
        renderItem={({ item, section }) =>
          <View>
            <Text>ID: {item.id}</Text>
              <Text>Name: {item.name}</Text>
              <Text>Roll Number: {item.rollno}</Text>
              <Text>Claas: {item.class}</Text>
              <Text>Department: {item.dept}</Text>
              <Text>CGPA: {item.cgpa}</Text>
          </View>
        }

        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.name}</Text>}
        keyExtractor={(item, index) => index}
      /> 

      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
  
});
