import {ScaledSheet} from "react-native-size-matters";

const styles = ScaledSheet.create({
    mainContainer: {
        flex: 1,
    },
    bgImage: {
        height: '812@s',
        width: '100%',
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
    }
})

export default styles;