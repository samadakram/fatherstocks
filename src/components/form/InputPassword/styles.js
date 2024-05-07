import { StyleSheet } from 'react-native';

import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: variables.whiteColor,
        borderRadius: 8,
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
        color: variables.darkGreyColor,
    },
    icon: {
        position: 'absolute',
        resizeMode: 'contain',
        width: 24,
        height: '100%',
        right: 16,
        top: 0,
        zIndex: 101,
    },
});

export default styles;
