import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground  } from 'react-native'
import { Icon } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { addViewed } from '../../store/slices/viewed'
import { PRODUCTS } from '../../data'
import { toggleFavorite } from '../../store/slices/favorite'
import styles from './style'

const ProductScreen = ({ navigation, route }) => {

    const dispatch = useDispatch()
    const { productID } = route.params
    const product = PRODUCTS.find(item => item.id == productID)
    const image = product ? product.thumb : null
    const goBack = () => {
        navigation.pop()
    }
    const viewedID = useSelector(state => state.viewed.items)
    const favoriteID = useSelector(state => state.favorite.items)
    useEffect(() => {
        dispatch(addViewed({id:productID}))
    }, [productID])

    const isFavorite = favoriteID.includes(productID) ? true : false
    const isViewed = viewedID.includes(productID) ? true : false
    const totalFavorite = isFavorite ? product.favorite + 1 : product.favorite
    const totalViewed = isViewed ? product.view+ 1 : product.view
    const iconFavorite = isFavorite ? 'heart' : 'heart-outline'
    const iconViewed = isViewed ? 'eye' : 'eye-outline'

    const addFavorite = () => {
        dispatch(toggleFavorite({id:productID}))
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.boxTop}>
                    <Image source={image} style={styles.imageTop} />
                    <View style={styles.action}>
                        <TouchableOpacity onPress={addFavorite} style={[styles.icon, styles.iconLeft]}>
                            <Icon icon={iconFavorite} number={totalFavorite} />
                        </TouchableOpacity>
                        <View style={[styles.icon, styles.iconRight]}>
                            <Icon icon={iconViewed} number={totalViewed}/>
                        </View>
                    </View>
                </View>
                
                <ImageBackground 
                    source={require('../../assets/background.jpg')}  
                    style={styles.contentBox}
                    imageStyle={{ opacity: 0.4 }}
                    >
                    <View style={styles.background}>
                        <View style={styles.descTop}>
                            <Text style={[styles.textSize, styles.textJustify]}>{product.intro}</Text>
                        </View>
                        <View style={[styles.descMiddle, styles.flexBox]}>
                            <Text style={[styles.title, styles.borderBox]}>
                                Nguyên liệu
                            </Text>
                            <Text style={[styles.content, styles.textSize]}>{product.ingredients}</Text>
                        </View>
                        <View style={styles.descBottom}>
                            <Text style={[styles.title, styles.borderBox]}>
                                Cách thực hiện
                            </Text>
                            <Text style={[styles.content, styles.textSize]}>{product.instructions}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View >
        </ScrollView>
    )
}

export default ProductScreen; 