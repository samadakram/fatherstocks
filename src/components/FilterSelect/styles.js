import { StyleSheet } from 'react-native';

import variables from '../../assets/styles/variables';

const styles = StyleSheet.create({
    mainContainer: {
        width: variables.screenWidth,
        paddingVertical: 23,
        flex: 1,
        alignItems: 'center',
    },
    filterButton: {
        width: 145,
        height: 35,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#285A84',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterButtonText: {
        fontSize: 16,
        lineHeight: 27,
        letterSpacing: 0.04,
        color: '#285A84',
        textAlign: 'center',
    },
    iconContainer: {
        height: 10,
        width: 12,
        marginLeft: 8,
    },
    chipContainer: {
        width: variables.windowWidth,
        marginTop: 17,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    filterChip: {
        height: 25,
        borderRadius: 13,
        backgroundColor: variables.brandBlueColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 13,
        marginRight: 6,
        marginTop: 6,
    },
    filterChipText: {
        fontSize: 11,
        fontFamily: variables.poppins400,
        lineHeight: 16,
        color: variables.whiteColor,
    },
    chipIconContainer: {
        marginLeft: 6,
    },
});

export default styles;
