import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabBar from '../../components/BottomTabBar';
import { ScrollView, View, Text } from 'react-native';
import styles from '../Styles/Styles';
import Headerpages from '../../components/Header';

export const Downloads = () => {
    return (
        <View style={ styles.container }>
            <ScrollView>
                <Headerpages />
                <View style={styles.pagedownload}>
                    <Text style={styles.textdownload} >Nenhum video baixado</Text>
                </View>
            </ScrollView>
            <BottomTabBar/>
        </View>
    )
}

