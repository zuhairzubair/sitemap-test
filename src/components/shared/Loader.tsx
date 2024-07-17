import colors from 'constants/colors';
import React from 'react';

import {ActivityIndicator, StyleSheet, View} from 'react-native';

type LoaderProps = {
  loading: boolean;
};

function Loader({loading}: LoaderProps): React.JSX.Element | null {
  if (!loading) {
    return null;
  }
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="small" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.white,
    opacity: 0.3,
  },
});

export default Loader;
