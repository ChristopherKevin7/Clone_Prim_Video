import { useNavigation } from '@react-navigation/native';
import BottomTabBar from '../../components/BottomTabBar';
import { ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../Styles/Styles';
import Headerpages from '../../components/Header';


export const Downloads = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <Headerpages />
                <View style={styles.pagedownload}>
                    <Text style={styles.textdownload} >No videos downloaded</Text>
                    <TouchableOpacity style={styles.buttonFind} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Find videos to download</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <BottomTabBar />
        </View>
    )
}

