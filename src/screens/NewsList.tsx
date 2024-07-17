import React, {useEffect, useState} from 'react';

import {Alert, StyleSheet, View} from 'react-native';
import Header from 'components/newsList/Header';
import useApi from 'hooks/useApi';
import {getNews} from 'api/news';
import List from 'components/newsList/List';
import Loader from 'components/shared/Loader';

function NewsList(): React.JSX.Element {
  const [currentSearch, setCurrentSearch] = useState('');
  const newsApi = useApi(getNews);

  const fetchNews = async () => {
    try {
      await newsApi.request(currentSearch);
    } catch (error: any) {
      Alert.alert('Api failed with: ' + error?.response?.data);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [currentSearch]);
  return (
    <View style={styles.container}>
      <Header onSearch={setCurrentSearch} />
      <List data={newsApi.data} />
      <Loader loading={newsApi.loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, height: '100%'},
});

export default NewsList;
