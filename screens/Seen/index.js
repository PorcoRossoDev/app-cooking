import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './style'
import COLORS from '../../contains'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatProduct } from '../../components'

const SeenStackScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <FlatProduct />
                <FlatProduct />
                <FlatProduct />
                <FlatProduct />
                <FlatProduct />
                <FlatProduct />
            </View>
        </ScrollView>
    )
}

export default SeenStackScreen;