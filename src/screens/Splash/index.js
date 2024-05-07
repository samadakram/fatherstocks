/* eslint-disable global-require, no-unused-vars */

import PropTypes from 'prop-types';
import React from 'react';
import {
    TouchableOpacity,
    Text,
    Dimensions,
    View,
    Image,
    NativeModules,
    Platform,
    StyleSheet,
} from 'react-native';

import Main from '../../components/layouts/Main';
import * as RootNavigation from '../../core/utils/navigation';
import generateStyles from './styles';
import useAuthentication from '../../core/hooks/useAuthentication';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const widthScaleFactor = windowWidth / 375;
const heightScaleFactor = windowHeight / 812;
const averageScaleFactor = (widthScaleFactor + heightScaleFactor) / 2;

const { StatusBarManager } = NativeModules;
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create(generateStyles({ windowWidth, windowHeight, widthScaleFactor, heightScaleFactor, averageScaleFactor, statusBarHeight }));

const Splash = ({ props }) => {
    // Initialise token refresh and redirection
    const loading = useAuthentication();

    return (
        <Main>
            <View style={styles.mainContainer}>
                <View style={styles.sectionContainer}>
                    <Image
                        style={styles.mainIcon}
                        source={require('../../assets/images/logo.png')} />
                </View>
                <TouchableOpacity
                    onPress={() => RootNavigation.navigate('Login')}
                    style={styles.mainButtonContainer}>
                    <Text
                        style={styles.mainButtonText}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </Main>
    );
};

Splash.defaultProps = {
    props: {},
};

Splash.propTypes = {
    props: PropTypes.object,
};

export default Splash;
