import { StyleSheet } from 'react-native';

import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 11,
        alignItems: 'center',
    },
    textInput: {
        height: 48,
        width: variables.screenWidth * 0.8,
        backgroundColor: variables.whiteColor,
        borderRadius: 8,
        padding: 15,
    },
    label: {
        marginBottom: 4,
        height: 17,
        fontFamily: variables.font600,
        fontSize: 12,
        letterSpacing: 0,
        color: variables.darkGreyColor,
    },
    btnlabelStyle: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        color: variables.brandBlueColor,
    },
    imageStyle: {
        height: 89,
        width: 96,
        borderRadius: 12,
        marginRight: 10,
        marginBottom: 10,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
    },
    addMoreBtn: {
        alignItems: 'center',
        marginTop: 25,
        left: 10,
        position: 'absolute',
    },
    delStyle: {
        position: 'absolute',
        zIndex: 999,
        right: 17,
        top: 10,
    },
    imgBox: {
        alignContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
