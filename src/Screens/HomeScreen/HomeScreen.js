import React from 'react';
import { View, Text, ImageBackground, ScrollView, Image, FlatList } from 'react-native';
import styles from './styles';
import TopBar from '../../Components/TopBar/TopBar';
import Images from '../../Utils/Images/Images';
import RoundedButtons from '../../Components/RoundedButton/RoundedButton';
import RoundedImage from '../../Components/RoundedImage/RoundedImage';

const HomeScreen = () => {

    const categories = [
        {
            name: 'SweatShirts',
            image: Images.sweatShirt,
        },
        {
            name: 'Hoodies',
            image: Images.sweatShirt,
        },
        {
            name: 'Pair',
            image: Images.sweatShirt,
        }
    ];

    const renderItem = (item) => {
        console.log("see the item:", item.item.image);
        return(
            <RoundedImage source={item.item.image} text={item.item.name} style={styles.flatListCategories}/>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <ImageBackground source={Images.bgImageClothes} style={styles.bgImage}>
                    <TopBar style={styles.topBarStyle} />
                    <RoundedButtons style={styles.roundedButton} text={"Shop Now"}/>
                    <Image source={Images.girlsJacket} style={styles.girlsJacket} />
                    <Image source={Images.boysJacket} style={styles.boysJacket} />
                    <Image source={Images.jacket} style={styles.jacket} />
                </ImageBackground>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                />
                <View style={styles.devider}>
                    <Text style={styles.saleText}>SALE</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;