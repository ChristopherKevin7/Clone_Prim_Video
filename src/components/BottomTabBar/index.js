import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeIcon from '../../assets/Icons/casa.png';
import TVIcon from '../../assets/Icons/aplicativo-de-tv.png';
import DownloadsIcon from '../../assets/Icons/download-direto.png';
import SearchIcon from '../../assets/Icons/lupa.png';
import styles from '../../screens/Styles/Styles';

const BottomTabBar = () => {
    const navigation = useNavigation();

    const currentPage = navigation.getState().routes.at(-1).name

    const handleTabPress = (page) => {
        navigation.navigate(page)
    };

    return (
        <View style={styles.pages}>
            <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('Home')}>
                <Image style={[styles.pagesIcons, currentPage === 'Home' && styles.currentPageIcon]} source={HomeIcon} />
                <Text style={[styles.pagesText, currentPage === 'Home' && styles.currentPageIcon]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('LiveTV')}>
                <Image style={[styles.pagesIcons, currentPage === 'LiveTV' && styles.currentPageIcon]} source={TVIcon} />
                <Text style={[styles.pagesText, currentPage === 'LiveTV' && styles.currentPageText]}>Live Tv</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('Downloads')}>
                <Image style={[styles.pagesIcons, currentPage === 'Downloads' && styles.currentPageIcon]} source={DownloadsIcon} />
                <Text style={[styles.pagesText, currentPage === 'Download' && styles.currentPageText]}>Downloads</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('Search')}>
                <Image style={[styles.pagesIcons, currentPage === 'Search' && styles.currentPageIcon]} source={SearchIcon} />
                <Text style={[styles.pagesText, currentPage === 'Search' && styles.currentPageText]}>Pesquisar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BottomTabBar;
