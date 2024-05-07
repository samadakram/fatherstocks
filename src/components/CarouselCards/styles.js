import { StyleSheet } from 'react-native';
import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    dotStyle: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: variables.brandBlueColor,
    },
    paginationStyle: {
        textAlign: 'center',
        position: 'absolute',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '30%',
        marginTop: 350,
    },
    container: {
        width: variables.screenWidth,
    },
    header: {
        fontSize: 16,
        lineHeight: 22,
        color: variables.darkGreyColor,
        fontFamily: variables.font700,
        textAlign: 'center',
    },
    body: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 22,
        color: variables.darkGreyColor,
        fontFamily: variables.font400,
    },
    imageStyle: {
        width: variables.screenWidth,
        height: 400,
    },
    backBox: {
        width: 50,
        height: 50,
        left: 27,
        top: 50,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: variables.whiteColor,
        shadowColor: 'rgb(40, 45, 68)',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowRadius: 10,
        shadowOpacity: 0.2,
        borderRadius: 12,
    },
    rightBox: {
        top: 81,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 20,
        position: 'absolute',
        left: '90%',
        zIndex: 9999,
    },
    openBoxStyle: {
        top: 60,
        backgroundColor: variables.whiteColor,
        width: 102,
        height: 100,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        left: '70%',
        position: 'absolute',
        borderRadius: 12,
    },
    bottomBorder: {
        borderWidth: 0.2,
        borderColor: '#D2E6FB',
        width: '100%',
    },
    boxItem: {
        height: 45,
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    boxItemText: {
        fontFamily: variables.nunito400,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        color: variables.brandBlueColor,
        textAlign: 'center',
    },
});

export default styles;
