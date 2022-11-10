import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import Icons from '../../Utils/Icons/Icons';

type Props = {
    style: any,
}

const TopBar = (props: Props) => {
    return (
        <View style={[styles.mainContainer, props.style]}>
            <TouchableOpacity>
                <Image source={Icons.menu} style={styles.menuIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Icons.topBarLogo} style={styles.topBarLogoIcon} />
            </TouchableOpacity>
            <View style={styles.topBarRightIconContainer}>
                <TouchableOpacity style={styles.lockButton}>
                    <Image source={Icons.lockIcon} style={styles.lockIcon}></Image>
                    <View style={styles.roundView}>
                        <Text style={styles.lockText}>0</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Icons.starIcon} style={styles.starIcon}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TopBar;