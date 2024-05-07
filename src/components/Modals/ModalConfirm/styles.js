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
        width: variables.screenWidth - 75,
        maxWidth: 400,
        height: 160,
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 32,
        borderRadius: 20,
        backgroundColor: variables.whiteColor,
        shadowColor: variables.light2GreyColor,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        shadowOpacity: 0.4,
        elevation: 3,
        alignItems: 'center',
    },
    titleText: {
        fontFamily: variables.merri500,
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 20,
        marginTop: -20,
        color: '#000000',
        marginLeft: 30,
        marginBottom: 20,
    },
    itemTitleText: {
        fontFamily: variables.nunito500,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        color: variables.blackColor,
    },
});

export default styles;
