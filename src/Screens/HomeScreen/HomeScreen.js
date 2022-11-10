import React from 'react';
import { View, Text, ImageBackground, ScrollView, Image } from 'react-native';
import styles from './styles';
import TopBar from '../../Components/TopBar/TopBar';
import Images from '../../Utils/Images/Images';
import RoundedButtons from '../../Components/RoundedButton/RoundedButton';

const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <ImageBackground source={Images.bgImageClothes} style={styles.bgImage}>
                    <TopBar style={styles.topBarStyle} />
                    <RoundedButtons style={styles.roundedButton}/>
                    <Image source={Images.girlsJacket} style={styles.girlsJacket}/>
                    <Image source={Images.boysJacket} style={styles.boysJacket}/>
                    <Image source={Images.jacket} style={styles.jacket}/>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;