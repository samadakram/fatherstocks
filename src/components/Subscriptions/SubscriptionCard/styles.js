import { StyleSheet } from 'react-native';
import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: variables.whiteColor,
        borderRadius: 8,
    },
    titleBg: {
        height: 32,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: variables.font700,
    },
    text: {
        fontSize: 12,
        fontFamily: variables.font400,
        textAlign: 'center',
        color: variables.darkGreyColor,
    },
    textBold: {
        fontSize: 24,
        fontFamily: variables.font700,
    },
    textGreen: {
        color: variables.redColor,
    },
    textEmphasis: {
        fontSize: 16,
        fontFamily: variables.font700,
    },
});

const cardStyle = StyleSheet.create({
    container: {
        height: 132,
        width: 94,
    },
    titleBg: {
        backgroundColor: 'transparent',
    },
    title: {
        color: variables.whiteColor,
    },
    textBold: {
        fontSize: 16,
    },
});

const bigStyle = StyleSheet.create({
    container: {
        height: 132,
        width: 94,
    },
    titleBg: {
        backgroundColor: variables.goldColor,
    },
    title: {
        color: variables.redColor,
    },
    textBold: {
        fontSize: 16,
    },
});

const biggestStyle = StyleSheet.create({
    container: {
        height: 164,
        width: 116,
    },
    titleBg: {
        backgroundColor: variables.redColor,
    },
    title: {
        color: variables.whiteColor,
    },
    textBold: {
        fontSize: 24,
    },
});

export default styles;

export { cardStyle, bigStyle, biggestStyle };
