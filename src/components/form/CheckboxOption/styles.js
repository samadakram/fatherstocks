import { StyleSheet } from 'react-native';

import variables from '../../../assets/styles/variables';

const styles = StyleSheet.create({
    radioItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 10,
        width: variables.screenWidth * 0.8,
    },
    radioText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 16,
        fontFamily: variables.font802,
    },
    radioWrapperNormal: {
        width: 15,
        height: 15,
        backgroundColor: variables.royalBlue,
        borderWidth: 1,
        borderRadius: 15,
    },
    radioWrapperChecked: {
        width: 25,
        height: 25,
        backgroundColor: variables.yellowColor,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: variables.yellowColor,
        borderRadius: 3,
    },
    radioCheckedInner: {
        width: 10,
        height: 10,
        backgroundColor: '#ed0055',
        borderRadius: 50,
    },
});

export default styles;
