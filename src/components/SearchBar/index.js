import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from '../../screens/Styles/Styles';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput style={ styles.searchBar } placeholder="Digite sua pesquisa" value={searchText} onChangeText={text => setSearchText(text)} />
    </View>
  );
};

export default SearchBar;
