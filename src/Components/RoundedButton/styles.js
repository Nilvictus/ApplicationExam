import {ScaledSheet} from "react-native-size-matters";
import Colors from "../../Utils/Colors/Colors";

const styles = ScaledSheet.create({
    mainContainer: {
        backgroundColor: Colors.white,
        height: '47@s',
        width: '180@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50@s',
        elevation: 5,
        alignSelf: 'center',
    },
    text: {
        color: Colors.black,
        fontSize: '20@vs',
    }
});

export default styles;