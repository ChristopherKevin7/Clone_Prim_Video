import BottomTabBar from '../../components/BottomTabBar';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import cnn from '../../assets/LiveTvCanais/cnn.png';
import bloom from '../../assets/LiveTvCanais/bloomberg.png';
import combate from '../../assets/LiveTvCanais/Combate.png';
import nba from '../../assets/LiveTvCanais/nba.jpg';
import premiere from '../../assets/LiveTvCanais/premiere.jpg';
import premiere2 from '../../assets/LiveTvCanais/premiere2.jpg';
import premiere3 from '../../assets/LiveTvCanais/premiere3.jpg';
import premiere4 from '../../assets/LiveTvCanais/premiere4.jpg';
import premiere5 from '../../assets/LiveTvCanais/premiere5.jpg';
import { TvLiveList } from '../../utils/LiveTV';
import { MoviesCard } from '../../components/MoviesCards';
import styles from '../Styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Headerpages from '../../components/Header';

export const LiveTV = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Headerpages />

                <Text style={styles.TVText} >Live and next events</Text>

                <View>
                    <FlatList
                        data={TvLiveList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (<MoviesCard movieURL={item.moviesURL} />)}
                        horizontal
                        contentContainerStyle={styles.contentList}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <Text style={styles.primeText} >Prime</Text>
                <TouchableOpacity>
                    <Image style={styles.Canais} source={cnn} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.Canais} source={bloom} />
                </TouchableOpacity>

                <LinearGradient colors={['rgba(255, 215, 0, 0.2)', 'rgba(255, 215, 0, 0)']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.paySection}>

                    <View>
                        <Text style={styles.payText} >Combate</Text>
                        <TouchableOpacity>
                            <Image style={styles.Canais} source={combate} />
                        </TouchableOpacity>

                        <Text style={styles.payText} >NBA League Pass</Text>
                        <TouchableOpacity>
                            <Image style={styles.Canais} source={nba} />
                        </TouchableOpacity>

                        <Text style={styles.payText} >Premiere</Text>
                        <TouchableOpacity>
                            <Image style={styles.Canais} source={premiere} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.Canais} source={premiere2} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.Canais} source={premiere3} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.Canais} source={premiere4} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.Canais} source={premiere5} />
                        </TouchableOpacity>

                    </View>

                </LinearGradient>

            </ScrollView>
            <BottomTabBar />
        </View>
    )
}
