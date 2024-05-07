import {
    Dimensions,
} from 'react-native';

const screen = Dimensions.get('screen');

const variables = {
    screenWidth: screen.width,
    screenHeight: screen.height,

    whiteColor: '#ffffff',
    greyColor: '#616161',
    greenColor: '#006329',
    darkGreyColor: '#39383a',
    lightGreyColor: '#f3f7f9',
    borderColor: '#e8e8e8',
    redColor: '#7e0c0b',
    goldColor: '#e6c05d',
    blackColor: 'black',

    // brand theme
    brandBlueColor: '#000',
    brandLightBlueColor: '#D2E6FB',
    // Fonts
    font400: 'OpenSans-Regular',
    font600: 'OpenSans-SemiBold',
    font700: 'OpenSans-Bold',

    nunito400: 'NunitoSans-Regular',
    nunito500: 'NunitoSans-SemiBold',
    nunito600: 'NunitoSans-Bold',

    merri400: 'Merriweather-Regular',
    merri500: 'Merriweather-Light',
    merri600: 'Merriweather-Bold',

    gelasio400: 'Gelasio-Regular',
    gelasio500: 'Gelasio-SemiBold',
    gelasio600: 'Gelasio-Bold',
};

export default variables;
