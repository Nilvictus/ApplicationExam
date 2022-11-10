import React from 'react';
import { View, Text, ImageBackground, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import TopBar from '../../Components/TopBar/TopBar';
import Images from '../../Utils/Images/Images';
import Icon from '../../Utils/Icons/Icons';
import RoundedButtons from '../../Components/RoundedButton/RoundedButton';
import RoundedImage from '../../Components/RoundedImage/RoundedImage';
import SaleItems from '../../Components/SaleItems/SaleItems';


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

    const clothesData = [
        {
            name: 'Trousers',
            description: 'This is a description',
            image: Images.sweatShirt,
        },
        {
            name: 'Trousers',
            description: 'This is a description',
            image: Images.sweatShirt,
        },
        {
            name: 'Trousers',
            description: 'This is a description',
            image: Images.sweatShirt,
        },
        {
            name: 'Trousers',
            description: 'This is a description',
            image: Images.sweatShirt,
        },
        {
            name: 'Trousers',
            description: 'This is a description',
            image: Images.sweatShirt,
        },
        {
            name: 'Trousers',
            description: 'This is a description',
            image: Images.sweatShirt,
        },
    ]

    const renderItem = (item) => {
        return (
                <RoundedImage source={item.item.image} text={item.item.name} style={styles.flatListCategories} />
            
        )
    }

    const renderClothesData = (item) => {
        return (
            <SaleItems source={item.item.image} name={item.item.name} description={item.item.description} style={styles.clothesData} />
        )
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <ImageBackground source={Images.bgImageClothes} style={styles.bgImage}>
                    <TopBar style={styles.topBarStyle} />
                    <RoundedButtons style={styles.roundedButton} text={"Shop Now"} />
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
                <View style={{ backgroundColor: 'white' }}>
                    <FlatList
                        contentContainerStyle={styles.salesFlatList}
                        data={clothesData}
                        numColumns={2}
                        renderItem={renderClothesData}
                    />
                    <RoundedButtons style={styles.roundedButtonSeeMore} text={"See More"} textStyle={styles.seeMoreText} />
                </View>
                <View style={styles.bottomView}>
                    <Image source={Icon.topBarLogo} style={styles.bottomLogo} />
                    <View style={styles.contactContainer}>
                        <Image source={Images.contact} style={styles.contact} />
                        <View style={styles.contactTextContainer}>
                            <Text style={styles.contactText}>Location or your address</Text>
                            <Text style={styles.contactText}>Your contact number</Text>
                            <Text style={styles.contactText}>Your Email</Text>
                        </View>
                    </View>
                    <Image source={Images.social} style={styles.socialIcons} />
                    <View style={styles.bottomTextContainer}>
                        <TouchableOpacity>
                            <Text style={styles.bottomText}>COLLECTION</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        >
                            <Text style={styles.bottomText}>INFORMATION</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.bottomText}>MORE</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;