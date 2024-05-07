import { StyleSheet } from 'react-native';

import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 11,
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
});

export default styles;
