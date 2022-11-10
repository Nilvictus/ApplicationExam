import React from "react";
import {View, TouchableOpacity, Text} from "react-native";
import styles from "./styles";

type Props = {
    style: any,
}
 
const RoundedButtons = (props: Props) => {
    return(
        <TouchableOpacity style={[styles.mainContainer, props.style]}>
            <Text style={styles.text}>Shop Now</Text>
        </TouchableOpacity>
    )
}

export default RoundedButtons;