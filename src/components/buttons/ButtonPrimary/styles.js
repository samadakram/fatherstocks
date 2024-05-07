import { StyleSheet } from 'react-native';

import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    btnStyle: {
        width: variables.screenWidth * 0.9,
        height: 60,
        borderRadius: 16,
        backgroundColor: variables.brandBlueColor,
        color: variables.whiteColor,
        fontWeight: 'normal',
        shadowColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: 'rgb(40, 45, 68)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 3,
        shadowOpacity: 0.3,
        elevation: 4,
    },
    btnDisabled: {
        backgroundColor: variables.lightGreyColor,
    },
    btnLabel: {
        fontSize: 20,
        fontFamily: variables.nunito400,
        lineHeight: 27,
        textAlign: 'center',
        color: variables.whiteColor,
        textTransform: 'none',
        letterSpacing: 0,
    },
    touchableDisabled: {
        backgroundColor: variables.greyColor,
    },
    textDisabled: {
        color: variables.darkGreyColor,
    },
});

export default styles;
