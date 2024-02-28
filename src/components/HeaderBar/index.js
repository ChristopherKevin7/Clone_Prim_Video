import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../screens/Styles/Styles';

const HeaderBar = () => {
    const navigation = useNavigation();

    const currentPage = navigation.getState().routes.at(-1).name

    const handleTabPress = (page) => {
        navigation.navigate(page)
    };

    return (
            <View style={styles.pages}>
                <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('Home')}>
                    <Text style={[styles.categoryText, currentPage === 'Home' && styles.currentPageText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('Movies')}>
                    <Text style={[styles.categoryText, currentPage === 'Movies' && styles.currentPageText]}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('Series')}>
                    <Text style={[styles.categoryText, currentPage === 'Series' && styles.currentPageText]}>Series</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagesSelector} onPress={() => handleTabPress('Kids')}>
                    <Text style={[styles.categoryText, currentPage === 'Kids' && styles.currentPageText]}>Kids</Text>
                </TouchableOpacity>
            </View>
    );
};

export default HeaderBar;
