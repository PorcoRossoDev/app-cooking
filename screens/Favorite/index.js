import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './style'
import { FlatProduct } from '../../components'

const FavoriteStackScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <FlatProduct heart={true} />
                <FlatProduct heart={true} />
                <FlatProduct heart={true} />
                <FlatProduct heart={true} />
                <FlatProduct heart={true} />
                <FlatProduct heart={true} />
            </View>
        </ScrollView>
    )
}

export default FavoriteStackScreen;