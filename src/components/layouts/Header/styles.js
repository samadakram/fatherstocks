import { StyleSheet } from 'react-native';
import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    header: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        padding: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    iconFind: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    logoImg: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    iconCart: {
        alignItems: 'flex-end',
    },
    mainIcon: {
        width: 90,
        height: 28,
        alignItems: 'center',
    },
    titleText: {
        fontFamily: variables.merri400,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'center',
        color: '#303030',
    },
    iconLeft: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});

export default styles;
