import { StyleSheet } from 'react-native';
import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    wrapperListResult1: {
        width: '90%',
        position: 'absolute',
        top: 60,
    },
    mainTitle: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'left',
        color: '#303030',
        fontFamily: variables.nunito400,
        marginBottom: 20,
    },
    itemResultDrillDown: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        height: 64,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 0.2,
        borderColor: '#6686A0',
        borderRadius: 2,
        marginBottom: 7,
        width: variables.screenWidth * 0.9,
    },
    itemResultDrillDownColumnTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        width: '90%',
    },
    itemResultDrillDownColumnIcon: {
        alignItems: 'flex-end',
        marginTop: 10,
    },
    itemFilterRow: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        height: 64,
        flexDirection: 'row',
        borderWidth: 0,
        borderRadius: 2,
        marginBottom: 7,
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    itemFilterRowText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'left',
        color: '#000000',
        fontFamily: variables.nunito400,
    },
    itemResultSelected: {
        borderWidth: 2,
    },
    column: {
        width: '30%',
    },
    column1: {
        width: '75%',
        alignItems: 'flex-end',
    },
    column2: {
        width: '5%',
        alignItems: 'flex-end',
        padding: 2,
        // flexBasis: '70%',
        // alignItems: 'flex-end',
        // justifyContent: 'center',
    },
    listItemTitle1: {
        fontFamily: 'Nunito Sans',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        color: '#285A84',
    },
    listItemSubTitle: {
        fontFamily: 'Nunito Sans',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        alignItems: 'center',
        color: '#285A84',
    },
    listItemSubTitleSelected: {
        color: '#6686A0',
        fontWeight: '900',
    },
    circle: {
        borderWidth: 1,
        borderColor: '#285A84',
        width: 20,
        height: 20,
        borderRadius: 20,
    },
    circleSelected: {
        borderWidth: 5,
    },
    selectedFilterText: {
        color: variables.brandBlueColor,
        fontFamily: variables.nunito400,
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 19,
        marginRight: 7,
    },
});

export default styles;
