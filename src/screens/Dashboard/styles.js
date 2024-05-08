import { StyleSheet } from 'react-native';

import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    backButton: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        fontFamily: 'Aeonik'
    },
    deleteButton: {
        padding: 10,
    },
    list: {
        flex: 1,
    },
    bottomBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    totalPrice: {
        fontSize: 22,
        fontWeight: '700',
        color: '#000'
    },
    checkoutButton: {
        backgroundColor: '#FF612f',
        padding: 10,
        borderRadius: 10,
        width: 169,
        height: 54,
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 22.4
    },
});

export default styles;
