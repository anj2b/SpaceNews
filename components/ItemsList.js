import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, Dimensions, RefreshControl } from 'react-native';

const ItemsList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  const getArticles = async () => {
     try {
      const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
      const json = await response.json();
      console.log(json);
      setRefreshing(false);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  const onRefresh = () => {
    //Clear old data of the list
    setData([]);
    //Call the Service to get the latest data
    getArticles();
  };


  return (
    <View style={{ flex: 1, padding: 0 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(id, index) => index.toString()}
          refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          renderItem={({ item }) => (
            <View style={styles.item}>
            <Text style={styles.texter}>{item.title}</Text>
            <Image
              style={{width: '100%', height: 200}}
              source={{
              uri: item.imageUrl,
              }}
            />
            <Text style={styles.texter2}>{item.summary}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    padding: 5,
    marginTop: 1,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
    fontSize: 30,
    backgroundColor: '#0000',
    flexDirection: 'column',
    alignItems: 'center',
  },
  texter: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#000000',
  },
  texter2: {
    marginTop: 10,
  }
});

export default ItemsList;