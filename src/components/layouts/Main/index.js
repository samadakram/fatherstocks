/* eslint-disable , import/named */

import NetInfo from '@react-native-community/netinfo';
import OrientationLocker from 'react-native-orientation-locker';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
    Platform,
    AppState,
    StatusBar,
    SafeAreaView,
    Keyboard,
    KeyboardAvoidingView,
    BackHandler,
    ScrollView,
    View,
    ImageBackground,
} from 'react-native';
import simpleStore from 'react-native-simple-store';
import * as RootNavigation from '../../../core/utils/navigation';
import Footer from '../Footer';
import { DATE_FORMAT } from '../../../core/utils/helpers';
import { PORTRAIT_ONLY } from '../../../core/constants';
import {
    TEMPORARY_PASSWORD,
} from '../../../core/utils/values';

import { networkChangeRequest, appStateChange } from '../../../core/global/globalActions';
import ModalCart from '../../Modals/ModalCart';

// Platform behavior
const behavior = Platform.select({
    ios: 'padding',
    android: 'padding',
});

const bgWhite = require('../../../assets/images/bg.png');

const Main = ({ children, backgroundImg, displayFooter, modalVisible, setModalVisible, cartProduct }) => {
    const dispatch = useDispatch();

    /* eslint-disable no-unused-vars */
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [lastActive, setLastActive] = useState(0);
    /* eslint-enable no-unused-vars */

    // --- Ref eeded for async handleStateChange function --- //
    const { appState } = useSelector(state => state.global);
    const appStateRef = useRef(appState);

    useEffect(() => {
        appStateRef.current = appState;
    }, [appState]);
    // ----- //

    // Define app state listeners
    const _handleAppStateChange = (state) => {
        if (appStateRef.current) {
            if (appStateRef.current === 'background' && state === 'active') {
                setLastActive(0);
            } else {
                // If user is closing app - set last active time
                setLastActive(moment().format(DATE_FORMAT));
            }
        }

        dispatch(appStateChange(state));
    };

    // Define keyboard listeners
    const _keyboardDidShow = () => {
        setShowKeyboard(true);
    };

    const _keyboardDidHide = () => {
        setShowKeyboard(false);
    };

    const goBack = () => {
        if (RootNavigation) {
            RootNavigation.goBack();
        }
        return true;
    };

    const toggleModalVisibility = () => {
        setModalVisible(!modalVisible);
    };

    // Define lifecycle methods
    useEffect(() => {
        if (PORTRAIT_ONLY) {
            OrientationLocker.lockToPortrait();
        }

        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
        BackHandler.addEventListener('hardwareBackPress', goBack);
        AppState.addEventListener('change', _handleAppStateChange);

        // Define network listeners
        const unmountNetInfo = NetInfo.addEventListener((state) => {
            dispatch(networkChangeRequest(state.isConnected));
        });

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
            BackHandler.removeEventListener('hardwareBackPress', goBack);
            AppState.removeEventListener('change', _handleAppStateChange);
            unmountNetInfo();
        };
    }, []);

    simpleStore.get('PASSWORD_RESET_TYPE').then(res => {
        if (res === TEMPORARY_PASSWORD) {
            RootNavigation.navigate('ResetPassword');
        }
    });

    return (
        <KeyboardAvoidingView
            style={{ flexGrow: 1 }}
            contentContainerStyle={{ flex: 1 }}
            behavior={behavior}
            enabled
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
            <ImageBackground
                source={backgroundImg}
                style={{ height: null,
                    width: '100%',
                    resizeMode: 'cover',
                    overflow: 'hidden',
                    flex: 1 }}>
                <SafeAreaView style={{ flexGrow: 1 }}>
                    <StatusBar
                        barStyle="light-content"
                        hidden={false} />
                    <View style={{ flexGrow: 1 }}>
                        <ScrollView
                            style={{ flexGrow: 1 }}
                            contentContainerStyle={{ flexGrow: 1 }}
                            nestedScrollEnabled
                            keyboardShouldPersistTaps="always">
                            {children}
                        </ScrollView>
                    </View>
                    {displayFooter ? <Footer /> : null }
                </SafeAreaView>
            </ImageBackground>
            <ModalCart cartProduct={cartProduct} visibility={modalVisible} onSetVisibility={() => toggleModalVisibility()} />
        </KeyboardAvoidingView>
    );
};

Main.defaultProps = {
    children: false,
    displayFooter: false,
    backgroundImg: bgWhite,
    modalVisible: false,
    setModalVisible: () => {},
    cartProduct: {},
};

Main.propTypes = {
    children: PropTypes.node,
    displayFooter: PropTypes.bool,
    backgroundImg: PropTypes.any,
    modalVisible: PropTypes.bool,
    setModalVisible: PropTypes.func,
    cartProduct: PropTypes.object,
};

export default Main;
