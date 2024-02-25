import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';

import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';
import { MOVIESWATCHING } from '../../utils/moviesWatching';  
import { MOVIESCRIME } from '../../utils/moviesCrimes';  
import { MOVIESWATCH } from '../../utils/moviesWatch';  
import { MoviesCard } from '../../components/MoviesCards';
import { ANIMES } from '../../utils/animes';

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
                <Image style={styles.amazonLogoImg} source={AmazonLogo} />
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
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
});