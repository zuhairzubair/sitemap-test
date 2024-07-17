import colors from 'constants/colors';
import React, {useState} from 'react';

import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type HeaderProps = {
  onSearch: (search: string) => void;
};

function Header({onSearch}: HeaderProps): React.JSX.Element {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.headerContainer}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          onSubmitEditing={() => onSearch(search)}
          placeholder="Type to search"
          placeholderTextColor={colors.border}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            onSearch(search);
            Keyboard.dismiss();
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 12,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
  inputWrapper: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  input: {
    color: colors.primary,
    flex: 1,
  },
  searchButton: {
    backgroundColor: colors.primary,
    marginRight: -12,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
});

export default Header;
