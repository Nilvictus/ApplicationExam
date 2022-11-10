import {ScaledSheet} from "react-native-size-matters";
import Colors from "../../Utils/Colors/Colors";

const styles = ScaledSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.gray2,
    },
    bgImage: {
        height: '812@s',
        width: '100%',
        marginBottom: '53@vs',
    },
    topBarStyle: {
        marginTop: '10@vs',
    },
    girlsJacket: {
        height: '197@s',
        width: '267@s',
        alignSelf: 'flex-end',
        marginTop: '44@vs',
    },
    boysJacket: {
        bottom: '20@s',
        height: '294@s',
        width: '197@s',
    },
    jacket: {
        height: '263@s',
        width: '187@s',
        alignSelf: 'flex-end',
        bottom: '110@s',
    },
    roundedButton: {
        position: 'absolute',
        top: '380@vs',
        zIndex: 1000,
    },
    flatListCategories: {
        alignSelf: 'center',
        marginTop: '20@vs',
    },
    devider: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '46@s',
        width: '100%',
        backgroundColor: Colors.white,
        elevation: 5,
    },
    saleText: {
        color: Colors.red1,
        fontSize: '35@vs',
        fontWeight: 'bold',
    }
})

export default styles;