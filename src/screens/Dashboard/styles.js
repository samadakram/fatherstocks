import { StyleSheet } from 'react-native';

import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Arial',
        fontSize: 34,
        color: variables.darkGreyColor,
    },
    subtitle: {
        fontFamily: 'Arial',
        fontSize: 14,
        color: variables.darkGreyColor,
    },
    mainButtonContainer: {
        width: '100%',
        height: 56,
        borderRadius: 16,
        backgroundColor: '#232323',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentFlatView: {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
    },
    categoryContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center', // if you want to fill rows left to right
    },
    categoryContainerItem: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(40, 90, 132, 0.12);',
        borderRadius: 12,
        marginBottom: 5,
    },
    categoryContainerItemActive: {
        backgroundColor: '#285A84',
    },
    categoryTitle: {
        marginTop: 70,
        right: 35,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: variables.nunito400,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        color: '#285A84',
    },
    labelStyle: {
        // fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 27,
        letterSpacing: 0.04,
        color: '#285A84',
        textAlign: 'center',
    },
    buttonStyle: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#285A84',
        borderRadius: 8,
        width: 144,
        height: 35,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },
    noResultsText: {
        fontFamily: variables.nunito400,
        fontSize: 12,
        lineHeight: 18,
        color: variables.brandBlueColour,
    },
});

export default styles;
