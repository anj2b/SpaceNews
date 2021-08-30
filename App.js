// React Native Counter Example using Hooks!

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import ItemsList from './components/ItemsList';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.title}>Space News</Text>
      </View>
      <ItemsList />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000',
  },
  topbar: {
    width: '100%',
    height: '10%',
    flexDirection: 'row', // row
    backgroundColor: 'black',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;