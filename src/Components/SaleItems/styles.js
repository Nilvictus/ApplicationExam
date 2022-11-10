import {ScaledSheet} from "react-native-size-matters";
import Colors from "../../Utils/Colors/Colors";

const styles = ScaledSheet.create({
    image: {
        height: '200@s',
        width: '141@s',
        margin: '10@s',
        marginTop: '10@vs',
    },
    nameText: {
        fontSize: '15@vs',
        color: Colors.black,
        marginLeft: '10@s',
        fontWeight: 'bold',
    },
    descriptionText: {
        fontSize: '13@vs',
        color: Colors.black,
        marginLeft: '10@s',
    },
    salesButton: {
        marginTop: '10@vs',
    }
});

export default styles;