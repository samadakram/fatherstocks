import { StyleSheet } from 'react-native';
import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    profileBox: {
        marginTop: 20,
        marginHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    textContainer: {
        width: '70%',
    },
    imgContainer: {
        width: '30%',
        alignItems: 'center',
        marginRight: 0,
    },
    profileTitleText: {
        fontFamily: variables.nunito400,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 25,
        color: '#303030',
        marginBottom: 5,
        textTransform: 'capitalize',
    },
    profileTitleDesc: {
        fontFamily: variables.nunito400,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        textAlign: 'justify',
        color: variables.brandBlueColor,
    },
    imgStyle: {
        width: 80,
        height: 80,
        borderRadius: 25,
    },
    imgSmallStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
});

export default styles;
