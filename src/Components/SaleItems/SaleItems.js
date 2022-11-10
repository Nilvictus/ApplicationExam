import React from 'react';
import {View, Text, Touchable, ImageBackground, TouchableOpacity, Image} from 'react-native';
import styles from './styles'

type Props = {
    source: any,
    name: String,
    description: String,
    discount: String,
}

const SaleItems = (props: Props) => {
    return(
        <TouchableOpacity style={styles.salesButton}>
            <ImageBackground source={props.source} style={styles.image}>
                <View style={styles.discountContainer}>
                    <Text style={styles.discountText}>{props.discount}% OFF</Text>
                </View>
            </ImageBackground>
            <Text style={styles.nameText}>{props.name}</Text>
            <Text style={styles.descriptionText}>{props.description}</Text>
        </TouchableOpacity>
    )
}

export default SaleItems;