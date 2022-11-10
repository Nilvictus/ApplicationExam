import React from 'react';
import {View, Text, Touchable, Image, TouchableOpacity} from 'react-native';
import styles from './styles'

type Props = {
    source: any,
    name: String,
    description: String,
}

const SaleItems = (props: Props) => {
    return(
        <TouchableOpacity style={styles.salesButton}>
            <Image source={props.source} style={styles.image}/>
            <Text style={styles.nameText}>{props.name}</Text>
            <Text style={styles.descriptionText}>{props.description}</Text>
        </TouchableOpacity>
    )
}

export default SaleItems;