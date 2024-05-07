import { StyleSheet } from 'react-native';

import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    cardContainer: {
        height: 300,
        width: '50%',
        borderRadius: 12,
    },
    cardSubContainer: {
        height: 270,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    cardImage: {
        height: 225,
        width: '100%',
        borderRadius: 12,
    },
    cardImageOverlay: {
        height: 225,
        width: '100%',
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    cartContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 170,
        right: 15,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#85C872',
    },
    cardContent: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: variables.blackColour,
        paddingHorizontal: 10,
        marginTop: 15,
    },
    cardTitle: {
        marginTop: 10,
        fontFamily: variables.nunito400,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 19,
        color: '#606060',
    },
    cardSubtitle: {
        fontFamily: variables.nunito400,
        fontSize: 14,
        fontWeight: '700',
        color: '#303030',
        lineHeight: 19,
        marginTop: 5,
    },
    inTodayPopupContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: -26,
        right: -13,
        height: 27,
        width: 53,
    },
    inTodayPopupBody: {
        backgroundColor: variables.yellowColour,
        borderRadius: 5,
        height: 22,
        width: 53,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inTodayPopupText: {
        fontFamily: variables.poppins400,
        fontSize: 9,
        color: '#333333',
    },
});

export default styles;
