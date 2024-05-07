import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    getTokenRequest,
    refreshTokenRequest,
    revokeTokenRequest,
    postForgotPasswordRequest,
    postResetPasswordRequest,
    // eslint-disable-next-line import/named
    postLogoutRequest,
    // eslint-disable-next-line import/named
    getUserInfoRequest,
    setAccessToken,
    setRefreshToken,
    completeRegistrationRequest,
} from './authActions';

function useAuth() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const handleGetTokenRequest = useCallback((payload) => {
        dispatch(getTokenRequest(payload));
    }, []);

    const handleRefreshTokenRequest = useCallback(() => {
        const { tokens, userData } = auth;
        dispatch(refreshTokenRequest({ refreshToken: tokens.refreshToken, username: userData.email }));
    }, []);

    const handleRevokeTokenRequest = useCallback(() => {
        dispatch(revokeTokenRequest());
    }, []);

    const handleForgotPasswordRequest = useCallback((payload) => {
        dispatch(postForgotPasswordRequest(payload));
    }, []);

    const handleResetPasswordRequest = useCallback((payload) => {
        dispatch(postResetPasswordRequest(payload));
    }, []);

    const handleLogoutRequest = useCallback((payload) => {
        dispatch(postLogoutRequest(payload));
    });

    const handleGetUserInfoRequest = useCallback((payload) => {
        dispatch(getUserInfoRequest(payload));
    }, []);

    const handleSetAccessToken = useCallback((payload) => {
        dispatch(setAccessToken(payload));
    });

    const handleSetRefreshToken = useCallback((payload) => {
        dispatch(setRefreshToken(payload));
    });

    const handleCompleteRegistrationRequest = useCallback((payload) => {
        dispatch(completeRegistrationRequest(payload));
    });

    return {
        auth,
        getTokenRequest: handleGetTokenRequest,
        refreshTokenRequest: handleRefreshTokenRequest,
        revokeTokenRequest: handleRevokeTokenRequest,
        forgotPasswordRequest: handleForgotPasswordRequest,
        resetPasswordRequest: handleResetPasswordRequest,
        logoutRequest: handleLogoutRequest,
        getUserInfo: handleGetUserInfoRequest,
        setAccessToken: handleSetAccessToken,
        setRefreshToken: handleSetRefreshToken,
        completeRegistrationRequest: handleCompleteRegistrationRequest,
    };
}

export default useAuth;
