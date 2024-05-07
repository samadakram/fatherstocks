import { StyleSheet } from 'react-native';
import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    // modal styles
    centeredView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
    },
    modalView: {
        width: variables.screenWidth - 16,
        maxWidth: 600,
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 32,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: variables.whiteColor,
        shadowColor: variables.light2GreyColor,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        shadowOpacity: 0.4,
        elevation: 3,
    },
    closeButton: {
        borderRadius: 32,
        position: 'absolute',
        right: 8,
        top: 8,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
