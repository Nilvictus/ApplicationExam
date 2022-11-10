import {ScaledSheet} from "react-native-size-matters";
import Colors from "../../Utils/Colors/Colors";

const styles = ScaledSheet.create({
    image: {
        height: '300@s',
        width: '204@s',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    roundedButton: {
        height: '25@s',
        width: '127@s',
        alignSelf: 'flex-end',
        marginBottom: '18@vs',
        
    },
    textStyle: {
        fontSize: '15@vs',
    },

});

export default styles;