import BottomTabBar from '../../components/BottomTabBar';
import { View } from 'react-native';
import styles from '../Styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import Headerpages from '../../components/Header';
import SearchBar from '../../components/SearchBar';

export const Search = () => {
    return (
        <View style={ styles.container }>
            <ScrollView>
                <Headerpages />
                <SearchBar></SearchBar>
            </ScrollView>
            <BottomTabBar/>
        </View>
    )
}
