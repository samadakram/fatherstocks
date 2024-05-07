import { StyleSheet } from 'react-native';

import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        flexDirection: 'column',
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
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
    },
    categoryContainerItemActive: {
        backgroundColor: '#285A84',
    },
    categoryTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: variables.nunito400,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        color: '#285A84',
        textAlign: 'center',
    },
    cardImage: {
        width: 23,
        height: 23,
    },
});

export default styles;
