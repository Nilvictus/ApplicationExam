import {ScaledSheet} from "react-native-size-matters";
import Colors from "../../Utils/Colors/Colors";

const styles = ScaledSheet.create({
    mainContainer: {
        height: '53@vs',
        width: '100%',
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '25@s',
        paddingRight: '25@s',
    },
    menuIcon: {
        height: '28@s',
        width: '36@s',
    },
    topBarLogoIcon: {
        height: '45@s',
        width: '45@s',
    },
    topBarRightIconContainer: {
        justifyContent: 'space-between',
        width: '55@s',
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        height: '28@s',
        width: '28@s',
    },
    lockIcon: {
        resizeMode: 'contain',
        height: '25@s',
        width: '25@s',
    },
    roundView: {
        left: -10,
        bottom: -20,
        justifyContent: 'center',
        alignItems: 'center',
        height: '13@s',
        width: '13@s',
        borderRadius: '50@s',
        backgroundColor: Colors.gray1,
    },
    lockButton: {
        flexDirection: 'row',
    },
    lockText: {
        fontSize: '9@vs',
        color: Colors.black,
        opacity: 0.4,
    }
})

export default styles