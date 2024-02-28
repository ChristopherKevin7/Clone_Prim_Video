import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import BottomTabBar from '../../components/BottomTabBar';
import HeaderBar from '../../components/HeaderBar';
import Headerpages from '../../components/Header';
import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MOVIESCRIME } from '../../utils/moviesCrimes';
import { MOVIESWATCH } from '../../utils/moviesWatch';
import { MoviesCard } from '../../components/MoviesCards';
import { ANIMES } from '../../utils/animes';
import styles from '../Styles/Styles';


export const Series = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>

                <Headerpages />
                <HeaderBar />

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

