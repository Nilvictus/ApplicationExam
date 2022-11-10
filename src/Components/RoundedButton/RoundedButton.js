import React from "react";
import {View, TouchableOpacity, Text} from "react-native";
import styles from "./styles";

type Props = {
    style: any,
    text: String,
    textStyle: any,
}
 
const RoundedButtons = (props: Props) => {
    return(
        <TouchableOpacity style={[styles.mainContainer, props.style]}>
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default RoundedButtons;