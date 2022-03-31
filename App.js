import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Box, NativeBaseProvider, Select, CheckIcon} from 'native-base';
import {Header} from './components/Header';
import {ListItem} from './components/ListItem';
// import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: 364, text: 'Oat Milk'},
    {id: 554, text: 'Bread'},
    {id: 774, text: 'Juice'},
  ]);
  const [service, setService] = React.useState('');

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Header title="Shopping List" />
        <FlatList
          data={items}
          renderItem={({item}) => <ListItem item={item} />}
        />
        {/* <Box w="3/4" maxW="300">
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </Box> */}
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
