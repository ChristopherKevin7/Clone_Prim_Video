import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';

import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCH } from '../../utils/moviesWatch';
import { MoviesCard } from '../../components/MoviesCards';
import { ANIMES } from '../../utils/animes';
import styles from '../Styles/Styles';


export const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
                <View style={styles.headerHome}>
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

                <Text style={styles.continueWatching} >Continue Watching</Text>

                <FlatList
                    data={MOVIESWATCHING}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (<MoviesCard movieURL={item.moviesURL} />)}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={styles.titleSection}>
                    <Text style={styles.primeText} >Prime</Text>
                    <Text style={styles.movieText} >-Crime Movies</Text>
                </View>

                <FlatList
                    data={MOVIESCRIME}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (<MoviesCard movieURL={item.moviesURL} />)}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={styles.titleSection}>
                    <Text style={styles.primeText} >Prime</Text>
                    <Text style={styles.movieText} >-Watching in your languages</Text>
                </View>

                <FlatList
                    data={MOVIESWATCH}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (<MoviesCard movieURL={item.moviesURL} />)}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={styles.titleSection}>
                    <Text style={styles.primeText} >Prime</Text>
                    <Text style={styles.movieText} >-Animes</Text>
                </View>

                <FlatList
                    data={ANIMES}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (<MoviesCard movieURL={item.moviesURL} />)}
                    horizontal
                    contentContainerStyle={styles.contentList}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
            <BottomTabBar />
        </View>
    );

};

