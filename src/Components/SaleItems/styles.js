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
    },
    discountContainer: {
        height: '23@s',
        width: '48@s',
        backgroundColor: Colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: '10@vs',
        left: '17@s',
    },
    discountText: {
        fontSize: '10@vs',
    }
});

export default styles;