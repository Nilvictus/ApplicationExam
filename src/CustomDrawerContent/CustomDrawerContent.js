import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles'

const CustomDrawerContent = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Hello Dear</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.navigationText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.navigationText}>New Arrival</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.navigationText}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.navigationText}>Last Collection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.navigationText}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.navigationText}>Woman</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomDrawerContent;