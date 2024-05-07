import { StyleSheet } from 'react-native';
import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    // modal styles
    centeredView: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
    },
    searchContainer: {
        width: '100%',
        alignItems: 'center',
    },
    modalView: {
        width: variables.screenWidth,
        height: '100%',
        alignItems: 'center',
        borderRadius: 10,
    },
    closeButton: {
        borderRadius: 32,
        right: 8,
        top: 8,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButton: {
        top: variables.screenHeight - 100,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: '#285A84',
        padding: 18,
        height: 56,

    },
    bottomButtonLabel: {
        fontFamily: variables.nunito400,
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        color: '#285A84',
    },
});

export default styles;
