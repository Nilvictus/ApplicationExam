import { ScaledSheet } from "react-native-size-matters";
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
    },
    clothesData: {
        height: '200@s',
        width: '141@s',
        margin: '10@s',
    },
    salesFlatList: {
        backgroundColor: Colors.white,
        alignItems: "center",
        width: '100%',
        paddingLeft: '20@s',
        paddingRight: '20@s',
        paddingTop: '20@vs',
    },
    roundedButtonSeeMore: {
        marginBottom: '72@s',
        marginTop: '40@vs',
        height: '32@s',
        width: '124@s',
    },
    seeMoreText: {
        fontSize: '18@s',
    },
    bottomLogo: {
        height: '100@s',
        width: '100@s',
        marginTop: '64@vs',
    },
    bottomView: {
        paddingLeft: '25@s',
        paddingBottom: '121@s',
    },
    contact: {
        height: '147@s',
        width: '41@s',
    },
    contactContainer: {
        marginTop: '20@vs',
        flexDirection: 'row',
    },
    contactText: {
        color: Colors.black,
        fontSize: '15@vs',
    },
    contactTextContainer: {
        justifyContent: 'space-between',
         padding: '15@s',
    },
    socialIcons: {
        marginTop: '34@s',
        height: '64@s',
        width: '214@s',
    },
    bottomText: {
        marginTop: '10@vs',
        color: Colors.black,
        fontSize: '18@vs',
    },
    bottomTextContainer: {
        marginTop: '40@vs',
    }
})

export default styles;