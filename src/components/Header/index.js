import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TvLiveIcon from '../../assets/Icons/iconTV.png';
import userIcon from '../../assets/Icons/user.png';
import styles from '../../screens/Styles/Styles';

const Headerpages = () => {
    const navigation = useNavigation();

    const currentPage = navigation.getState().routes.at(-1).name

    const handleTabPress = (page) => {
        navigation.navigate(page)
    };

    return (
        <View style={styles.headerTv}>
            <Text style={styles.TextHeader} >{currentPage}</Text>
            <View style={styles.rightHeader}>
                <View style={styles.componentsRight}>
                    <TouchableOpacity>
                        <Image style={styles.connectivity} source={TvLiveIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.userIcon} source={userIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Headerpages;