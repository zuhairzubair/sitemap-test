import colors from 'constants/colors';
import React from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';

type ListProps = {
  data: any;
};

function List({data}: ListProps): React.JSX.Element {
  if (!data || !data?.articles?.length) {
    return (
      <View>
        <Text style={styles.noResults}>No results found</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.scrollView}>
      {data?.articles?.map((item: any, index: number) => (
        <View style={styles.newsItem} key={`news-${index}`}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    color: colors.black,
  },
  title: {
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  scrollView: {
    flex: 1,
  },
  noResults: {
    color: colors.black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsItem: {
    padding: 12,
    borderColor: colors.border,
    borderWidth: 1,
    marginBottom: 12,
  },
});

export default List;
