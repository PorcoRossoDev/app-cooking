import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground  } from 'react-native'
import { Icon } from '../../components'
import styles from './style'

const ProductScreen = ({ navigation }) => {
    const image = require('../../assets/product.jpg')
    const goBack = () => {
        navigation.pop()
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.boxTop}>
                    <Image source={image} style={styles.imageTop} />
                    <View style={styles.action}>
                        <View style={[styles.icon, styles.iconLeft]}>
                            <Icon icon={'heart-outline'} number={123} />
                        </View>
                        <View style={[styles.icon, styles.iconRight]}>
                            <Icon icon={'eye-outline'} number={123}/>
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
                            <Text style={[styles.textSize, styles.textJustify]}>
                                Pariatur consectetur ut quis cupidatat magna adipisicing cupidatat amet dolore velit. 
                                Aute cillum consequat tempor adipisicing. 
                                Deserunt proident adipisicing adipisicing nostrud dolore ex do est mollit.
                            </Text>
                        </View>
                        <View style={[styles.descMiddle, styles.flexBox]}>
                            <Text style={[styles.title, styles.borderBox]}>
                                Nguyên liệu
                            </Text>
                            <Text style={[styles.content, styles.textSize]}>
                                Pariatur consectetur ut quis cupidatat 
                                magna adipisicing cupidatat amet dolore velit
                                Aute cillum consequat tempor adipisicing. 
                                Deserunt proident adipisicing adipisicing nostrud dolore ex do est mollit.
                            </Text>
                        </View>
                        <View style={styles.descBottom}>
                            <Text style={[styles.title, styles.borderBox]}>
                                Cách thực hiện
                            </Text>
                            <Text style={[styles.content, styles.textSize]}>
                                Pariatur consectetur ut quis cupidatat 
                                magna adipisicing cupidatat amet dolore velit
                                Aute cillum consequat tempor adipisicing. 
                                Deserunt proident adipisicing adipisicing nostrud dolore ex do est mollit.
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View >
        </ScrollView>
    )
}

export default ProductScreen; 