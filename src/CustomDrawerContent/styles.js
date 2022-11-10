import {ScaledSheet} from "react-native-size-matters";
import Colors from "../Utils/Colors/Colors";

const styles = ScaledSheet.create({
    mainContainer: {
        paddingLeft: '10@s',
    },
    title: {
        color: Colors.black,
        fontSize: '20@vs',
        marginTop: '10@s',
        marginBottom: '30@s',
        borderBottomWidth: 1,
        paddingBottom: '10@s',
        borderColor: Colors.gray1,
    },
    navigationText:{
        color: 'black',
        fontSize: '13@s',
    },
    button: {
        marginTop: '10@vs',
    }
})

export default styles;