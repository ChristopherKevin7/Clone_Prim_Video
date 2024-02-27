import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabBar from '../../components/BottomTabBar';
import { View } from 'react-native';
import styles from '../Styles/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import Headerpages from '../../components/Header';

export const Search = () => {
    return (
        <View style={ styles.container }>
            <ScrollView>
                <Headerpages />
            </ScrollView>
            <BottomTabBar/>
        </View>
    )
}
