import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';

import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';
import HomeIcon from '../../assets/Icons/casa.png';
import TVICon from '../../assets/Icons/aplicativo-de-tv.png';
import DownloadsIcon from '../../assets/Icons/download-direto.png';
import SearchIcon from '../../assets/Icons/lupa.png';
import { MOVIESWATCHING } from '../../utils/moviesWatching';  
import { MOVIESCRIME } from '../../utils/moviesCrimes';  
import { MOVIESWATCH } from '../../utils/moviesWatch';  
import { MoviesCard } from '../../components/MoviesCards';
import { ANIMES } from '../../utils/animes';


export const Home = () => {
    const navigation = useNavigation();

    const [currentPage, setCurrentPage] = useState('Home');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
                <Image style={styles.amazonLogoImg} source={AmazonLogo} />
            </View>
            
            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Series</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

                <TouchableOpacity style={styles.movieImageThumbnail}>
                    <Image style={styles.movieImage} source={MovieTheWhell} />
                </TouchableOpacity>

                <Text style={styles.movieText} >Continue Watching</Text>

                <FlatList 
                data={MOVIESWATCHING} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (<MoviesCard movieURL={item.moviesURL} />)}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.movieText} >Crime Movies</Text>

                <FlatList 
                data={MOVIESCRIME} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (<MoviesCard movieURL={item.moviesURL} />)}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.movieText} >Watching in your languages</Text>

                <FlatList 
                data={MOVIESWATCH} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (<MoviesCard movieURL={item.moviesURL} />)}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.movieText} >Animes</Text>

                <FlatList 
                data={ANIMES} 
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (<MoviesCard movieURL={item.moviesURL} />)}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
            <View style={styles.pages}>
                <TouchableOpacity style={styles.pagesSelector} onPress={() => navigation.navigate('Home')}>
                    <Image style={[styles.pagesIcons , currentPage === 'Home' && styles.currentPageIcon]} source={HomeIcon} />
                    <Text style={[styles.pagesText , currentPage === 'Home' && styles.currentPageIcon]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagesSelector} onPress={() => navigation.navigate('LiveTV')}>
                    <Image style={[styles.pagesIcons , currentPage === 'Tv' && styles.currentPageIcon]} source={TVICon} />
                    <Text style={[styles.pagesText , currentPage === 'Tv' && styles.currentPageText]}>Live Tv</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagesSelector} onPress={() => navigation.navigate('Downloads')}>
                    <Image style={[styles.pagesIcons , currentPage === 'Downloads' && styles.currentPageIcon]} source={DownloadsIcon} />
                    <Text style={[styles.pagesText , currentPage === 'Download' && styles.currentPageText]}>Downloads</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pagesSelector} onPress={() =>  navigation.navigate('Search')}>
                    <Image style={[styles.pagesIcons , currentPage === 'Search' && styles.currentPageIcon]} source={SearchIcon} />
                    <Text style={[styles.pagesText , currentPage === 'Search' && styles.currentPageText]}>Pesquisar</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    amazonLogoImg: {
        marginTop:-32,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent:"space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },

    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFFFFF"
    },

    movieText: {
        padding: 15,
        fontSize: 18,
        fontWeight: "700",
        color: "#FFFFFF"
    },

    movieImageThumbnail: {
        width: "100%",
        alignItems: "center",
    },

    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },

    contentMovies: {
        
    },

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