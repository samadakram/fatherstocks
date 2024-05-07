/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { purgeStoredState } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import store from 'react-native-simple-store';
import { isEmpty } from 'underscore';
import useStore from './useStore';
import { setAccessToken, setRefreshToken, refreshTokenRequest } from '../auth/authActions';
import { INVALID_TOKEN } from '../utils/values';

const {
    REFRESH_TOKEN,
    USERNAME,
} = require('../constants').default;

function useAuthentication() {

    const navigation = useNavigation();
    const route = useRoute();

    const dispatch = useDispatch();
    const { tokens, userData, isFetchingRefresh, loadingRefreshToken } = useSelector(state => state.auth);
    const { accessToken, refreshToken } = tokens;
    const { isOnline } = useSelector(state => state.global);
    const [loading, setLoading] = useState(false);
    const [gotToken, setGotToken] = useState(false);

    const logout = () => {
        dispatch(setAccessToken(INVALID_TOKEN));
        dispatch(setRefreshToken(INVALID_TOKEN));
        purgeStoredState({ storage: AsyncStorage });
        setLoading(false);
        // eslint-disable-next-line
    };

    // Decision whether to refresh access token or logout user
    useEffect(() => {
        if (isOnline) {
            if (!isEmpty(userData) && refreshToken && !isFetchingRefresh && refreshToken !== INVALID_TOKEN) {
                if (refreshToken !== INVALID_TOKEN) {
                    // dispatch(refreshTokenRequest({ refreshToken: tokens.refreshToken, username: userData?.email }));
                    navigation.replace('Dashboard');
                } else if (route.name !== 'Login') {
                    logout();
                }
            } else {
                logout();
            }
        }
    }, [refreshToken, loadingRefreshToken]);

    return loading;
}

export default useAuthentication;
