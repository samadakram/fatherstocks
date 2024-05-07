import { StyleSheet } from 'react-native';

import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    priceContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: '20%',
        marginHorizontal: 30,
        maxHeight: '30%',
    },
    Column: {
        width: '50%',
    },
    priceTitle: {
        fontFamily: variables.nunito400,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        alignItems: 'center',
        color: variables.brandBlueColor,
    },
    input: {
        height: 40,
        paddingLeft: 15,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        fontFamily: variables.nunito400,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        alignItems: 'center',
        width: '90%',
        color: variables.blackColor,
    },
    priceSymbol: {
        position: 'absolute',
        marginTop: 10,
    },
    saveButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#285A84',
        borderWidth: 1,
        borderRadius: 16,
        width: '90%',
    },
    labelStyle: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        color: '#285A84',
    },
    submitContainer: {
        alignItems: 'center',
    },
});

export default styles;
