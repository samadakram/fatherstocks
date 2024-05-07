import { StyleSheet } from 'react-native';
import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    rootWrapper: {
        marginVertical: 5,
        shadowColor: 'rgb(40, 45, 68)',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
    },
    wrapper: {
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 11,
        elevation: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 63,
    },
    contentWrapper: {
        width: 110,
        height: 110,
        borderRadius: 63,
    },
    contentCircle: {
        width: '100%',
        height: '100%',
        borderRadius: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContent: {
        width: '50%',
        height: '50%',
        color: 'red',
    },
    title: {
        textAlign: 'center',
        padding: 5,
        fontSize: 14,
        fontFamily: variables.font600,
    },
    value: {
        textAlign: 'center',
        fontSize: 14,
    },
});

export default styles;
