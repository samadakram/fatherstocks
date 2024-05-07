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
    itemBox: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        width: '80%',
    },
    imgHolder: {
        width: '50%',
    },
    infoHolder: {
        width: '50%',
        marginLeft: 5,
    },
    cardImage: {
        height: 100,
        width: 100,
        borderRadius: 12,
    },
    itemTitleText: {
        fontFamily: variables.nunito500,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        color: variables.blackColor,
    },
    itemSubText: {
        fontFamily: variables.nunito400,
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 14,
        color: '#606060',
        textAlign: 'justify',
        marginTop: 1,
    },
    itemPriceText: {
        fontFamily: variables.nunito400,
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'justify',
        color: variables.blackColor,
        marginTop: 3,
    },
});

export default styles;
