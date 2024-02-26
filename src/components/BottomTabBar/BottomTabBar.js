import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeIcon from '../../assets/Icons/casa.png';
import TVIcon from '../../assets/Icons/aplicativo-de-tv.png';
import DownloadsIcon from '../../assets/Icons/download-direto.png';
import SearchIcon from '../../assets/Icons/lupa.png';

const BottomTabBar = () => {
    const navigation = useNavigation();

    const handleTabPress = (screenName) => {
        navigation.navigate(screenName);
  };

  return (
    <View style={styles.pages}>
        <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('Home')}>
            <Image style={[styles.pagesIcons , currentPage === 'Home' && styles.currentPageIcon]} source={HomeIcon} />
            <Text style={[styles.pagesText , currentPage === 'Home' && styles.currentPageIcon]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('LiveTV')}>
            <Image style={[styles.pagesIcons , currentPage === 'Tv' && styles.currentPageIcon]} source={TVIcon} />
            <Text style={[styles.pagesText , currentPage === 'Tv' && styles.currentPageText]}>Live Tv</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('Downloads')}>
            <Image style={[styles.pagesIcons , currentPage === 'Downloads' && styles.currentPageIcon]} source={DownloadsIcon} />
            <Text style={[styles.pagesText , currentPage === 'Download' && styles.currentPageText]}>Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pagesSelector} onPress={() =>  handleTabPress('Search')}>
            <Image style={[styles.pagesIcons , currentPage === 'Search' && styles.currentPageIcon]} source={SearchIcon} />
            <Text style={[styles.pagesText , currentPage === 'Search' && styles.currentPageText]}>Pesquisar</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    pages: {
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 12,
        marginBottom: 10,
        paddingHorizontal: 20,
    },  

    pagesIcons: {
        opacity: 0.3,
    },

    currentPageIcon: {
        opacity: 0.9,
    },

    pagesText: {
        color: '#ffffff',
        opacity: 0.3,
    },

    currentPageText: {
        opacity: 0.9,
    },

    pagesSelector: {
        alignItems: "center"
    },
});

export default BottomTabBar;
