import React from "react";
import {View, ImageBackground, Text, TouchableOpacity} from "react-native";
import styles from "./styles";
import RoundedButton from "../RoundedButton/RoundedButton";

type Props = {
    source: string,
    style: any,
    text: String,
}

const RoundedImage = (props: Props) => {
    return(
        <View style={{borderRadius: 40}}>
          <ImageBackground source={props.source} style={[styles.image, props.style]}>
            <RoundedButton textStyle={styles.textStyle} text={props.text} style={styles.roundedButton}/>
          </ImageBackground>
        </View>
    )
}

export default RoundedImage;