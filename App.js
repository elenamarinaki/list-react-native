import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Header} from './components/Header';
// import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: 364, text: 'Oat Milk'},
    {id: 554, text: 'Bread'},
    {id: 774, text: 'Juice'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
