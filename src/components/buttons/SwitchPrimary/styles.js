import { StyleSheet } from 'react-native';
import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    topLabel: {
        fontFamily: variables.font600,
        fontSize: 12,
        marginBottom: 8,
        color: variables.greyColor,
    },
    bottomLabel: {
        fontFamily: variables.font600,
        fontSize: 12,
        marginTop: 8,
        color: variables.greyColor,
    },
});

export default styles;
