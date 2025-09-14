import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import styles from './style'
import { FlatProduct } from '../../components'
import {PRODUCTS} from '../../data'
import { useSelector, useDispatch } from 'react-redux'

const FavoriteStackScreen = ({ navigation }) => {
    const favoriteID = useSelector(state => state.favorite.items)
    const favoriteProducts = PRODUCTS.filter(product => favoriteID.includes(product.id));

    console.table(navigation)
    const renderItemProduct = ({item}) => {
        return (
            <FlatProduct 
            id={item.id}
            title={item.title}
            thumb={item.thumb}
            type='favorite'
            navigation={navigation}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={favoriteProducts}
                keyExtractor={item => item.id}
                renderItem={renderItemProduct}
                ListEmptyComponent={() => <Text>Chưa có sản phẩm yêu thích</Text>}
            />
        </View>
    )
}

export default FavoriteStackScreen;