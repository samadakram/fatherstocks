import { StyleSheet, Dimensions } from 'react-native';
import variables from '../../../assets/styles/variables';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        height: 70,
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variables.whiteColor,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#4a4a4a',
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowRadius: 5,
    },
    linkContainer: {
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkText: {
        textAlign: 'center',
        marginLeft: -7,
        marginTop: screen.height * 0.009,
        fontSize: 12,
        fontFamily: variables.font802,
    },
});

export default styles;
