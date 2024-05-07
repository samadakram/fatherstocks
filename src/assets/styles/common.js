import {
    StyleSheet,
} from 'react-native';

import variables from './variables';

const common = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: variables.screenWidth,
    },
    logo: {
        resizeMode: 'contain',
        width: variables.screenWidth * 0.35,
        height: variables.screenHeight * 0.2,
    },
    title: {
        fontFamily: variables.font700,
        color: '#fff',
        fontSize: 21,
        marginVertical: 20,
        textAlign: 'center',
    },
    button: {
        width: variables.screenWidth * 0.8,
        marginTop: 15,
        borderRadius: 50,
    },
    shadowStrong: {
        shadowColor: 'rgb(40, 45, 68)',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowRadius: 10,
        shadowOpacity: 0.2,
        elevation: 8,
    },
    hyperlink: {
        fontFamily: variables.font700,
        color: variables.redColor,
        fontSize: 14,
    },
    contactWhiteBox: {
        borderWidth: 1,
        borderColor: variables.brandBlueColor,
        borderRadius: 15,
        width: variables.screenWidth * 0.9,
        height: 60,
        backgroundColor: variables.whiteColor,
        color: variables.brandBlueColor,
        fontWeight: 'normal',
        shadowColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 20,
        fontFamily: variables.nunito400,
        lineHeight: 27,
        textAlign: 'center',
        color: variables.brandBlueColor,
        textTransform: 'none',
        letterSpacing: 0,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        marginTop: 20,
    },
    labelStyleWhite: {
        fontFamily: variables.nunito400,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
        color: variables.brandBlueColor,
    },
    labelStyleBrand: {
        fontFamily: variables.nunito400,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
        color: variables.whiteColor,
    },
    titleTextModal: {
        fontFamily: variables.merri400,
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        textAlign: 'center',
        color: variables.brandBlueColor,
    },
});

export default common;
