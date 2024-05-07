import { StyleSheet } from 'react-native';
import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 30,
        borderColor: '#85C872',
        backgroundColor: 'white',
        minHeight: 60,
    },
    formSearch: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },
    wrapperLeftContent: {
        justifyContent: 'center',
        marginTop: 18,
        width: 40,
        paddingLeft: 16,
        paddingRight: 8,
        position: 'absolute',
    },

    wrapperRightContent: {
        paddingRight: 16,
        width: '80%',
    },
    wrapperListResult: {
        width: '100%',
        top: 10,
        height: 450,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingBottom: 6,
        marginBottom: 5,
    },
    textInput: {
        fontFamily: variables.nunito400,
        marginLeft: 50,
        fontSize: 17,
        marginTop: 15,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 26,
    },
    itemResult: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        height: 80,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginTop: 10,
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
});

export default styles;
