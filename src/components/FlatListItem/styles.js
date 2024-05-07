import { StyleSheet } from 'react-native';

import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    itemResult: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        height: 80,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginTop: 10,
    },
    itemResultSelected: {
        paddingHorizontal: 16,
        height: 80,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: variables.whiteColor,
        marginTop: 10,
        borderColor: variables.brandBlueColor,
        borderWidth: 2,
    },
    column: {
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    column2: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    listItemTitle: {
        fontFamily: variables.nunito400,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        color: '#285A84',
    },
    listItemSubTitle: {
        fontFamily: variables.nunito400,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        alignItems: 'center',
        color: '#000',
        marginTop: 10,
    },
    imageHolder: {
        width: 37,
        height: 37,
        borderWidth: 0.1,
        borderColor: '#85C872',
        borderRadius: 2,
    },
    subTitle: {
        fontFamily: variables.nunito400,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        color: variables.brandBlueColor,
    },
});

export default styles;
