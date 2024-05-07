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
    itemResult1: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        height: 64,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#6686A0',
        borderRadius: 2,
        marginBottom: 7,
    },
    itemResultSelected: {
        color: '#285A84',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '70%',
        flex: 1,
    },
    column2: {
        flexBasis: '20%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    listItemTitle1: {
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
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        alignItems: 'center',
        color: '#6686A0',
        marginTop: 10,
    },
    listItemSubTitleSelected: {
        color: '#285A84',
        fontWeight: '900',
    },
});

export default styles;
