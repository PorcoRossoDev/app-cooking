import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import styles from './style'
import COLORS from '../../contains'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatProduct } from '../../components'
import { useSelector } from 'react-redux'
import { PRODUCTS } from '../../data'

const SeenStackScreen = ({navigation}) => {

    const viewed = useSelector(state => state.viewed.items)
    const products = PRODUCTS.filter(item => viewed.includes(item.id))

    const renderProduct = ({item}) => {
        return (
            <FlatProduct 
                id={item.id}
                title={item.title}
                thumb={item.thumb}
                type='seen'
                heart
                navigation={navigation}
                />
        ) 
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={item=>item.id}
                renderItem={renderProduct}
                ListEmptyComponent={() => ( <Text>Không có sản phẩm đã xem</Text> )}
            />
        </View>
    )
}

export default SeenStackScreen;