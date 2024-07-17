/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import NewsList from '@screens/NewsList';
import colors from 'constants/colors';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <NewsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default App;
