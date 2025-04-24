import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/useRedux';
import {fetchHomeRequest} from './redux/homeSlice';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {data, isLoading} = useAppSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(fetchHomeRequest());
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text style={styles.cardText}>{item.phone}</Text>
                <Text style={styles.cardText}>{item.address.city}</Text>
                <Text style={styles.cardText}>{item.website}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  cardText: {
    fontSize: 18,
    color: '#222',
  },
});
