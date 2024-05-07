import React, { useState, useEffect } from 'react';
import { isEmpty } from 'underscore';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,
    View,
    NativeModules,
    TextInput,
    Platform,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';
import * as RootNavigation from '../../core/utils/navigation';

import Main from '../../components/layouts/Main';
import generateStyles from './styles';
import useAuth from '../../core/auth/useAuth';
import { showError } from '../../core/utils/notify';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const widthScaleFactor = windowWidth / 375;
const heightScaleFactor = windowHeight / 812;
const averageScaleFactor = (widthScaleFactor + heightScaleFactor) / 2;
const { StatusBarManager } = NativeModules;
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create(generateStyles({ windowWidth, windowHeight, widthScaleFactor, heightScaleFactor, averageScaleFactor, statusBarHeight }));


const Login = () => {
    const { auth, getTokenRequest } = useAuth();
    const { error, tokens: { accessToken } } = auth;

    const [submitted, setSubmitted] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [displayPassword, setDisplayPassword] = useState(false);

    const handleLogin = () => {

        let validate = true;

        if (isEmpty(username) || username === '') {
            validate = false;
            showError('Email required');
            return;
        }
        if (isEmpty(password) || password === '') {
            validate = false;
            showError('Password required');
        }

        if (validate) {
            if (username === 'admin' && password === '1234') {
                RootNavigation.navigate('Dashboard');
            } else {
                showError('Email / Password combination');
            }
        }
    };

    useEffect(() => {
        setSubmitted(false);
        setPassword('');
    }, [error, accessToken]);

    // const handleEyeView = () => {
    //     setDisplayPassword(true);
    // };

    return (
        <Main>
            <View style={styles.mainContainer}>
                <TouchableOpacity
                    style={styles.backIconContainer}
                    onPress={() => RootNavigation.goBack()}>
                    <Ionicons
                        name="chevron-back-sharp"
                        size={30 * averageScaleFactor}
                        color="#232323" />
                </TouchableOpacity>
                <View style={styles.bottomSectionContainer}>
                    <Text style={styles.mainHeaderText}>Login</Text>
                    <View style={[styles.textInputContainerContainer, { top: 104 * heightScaleFactor }]}>
                        <View style={styles.textInputContainer}>
                            <View style={styles.textInputIconContainer} />
                            <TextInput
                                placeholder="Email"
                                onChangeText={setUsername}
                                value={username}
                                style={[styles.textInput, {}]} />
                        </View>
                    </View>
                    <View style={[styles.textInputContainerContainer, { top: (104 + 64 * 1.5) * heightScaleFactor, height: 64 * heightScaleFactor * 2 }]}>
                        <View style={styles.textInputContainer}>
                            <View style={styles.textInputIconContainer} />
                            <TextInput
                                placeholder="Password"
                                secureTextEntry={!displayPassword}
                                onChangeText={setPassword}
                                value={password}
                                style={[styles.textInput, { width: '70%' }]} />
                            {/* <TouchableOpacity
                                onPress={() => setDisplayPassword(true)}
                                onPressOut={() => setDisplayPassword(false)}
                                style={[styles.textInputIconContainer, { width: '15%', marginLeft: 30 }]}>
                                <Entypo
                                    name="eye"
                                    size={30 * averageScaleFactor}
                                    color="#285A84" />
                            </TouchableOpacity> */}
                        </View>
                        <TouchableOpacity
                            onPress={() => RootNavigation.navigate('ForgotPassword')}>
                            <Text style={styles.forgottenPasswordText}>Forgotten password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainButtonContainerContainer}>
                        <TouchableOpacity
                            disabled={submitted}
                            onPress={handleLogin}
                            style={[styles.mainButtonContainer, submitted ? { backgroundColor: '#125185' } : null]}>
                            <Text
                                style={styles.mainButtonText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 25 }}>
                            <TouchableOpacity
                                onPress={() => RootNavigation.navigate('SignUp')}>
                                <Text style={styles.signUpText}>Don’t have an account?</Text>
                                <Text style={[styles.signUpText, { fontSize: 15, color: '#285A84', fontWeight: 'bold', marginLeft: 40 }]}>
                                    Sign up
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ marginTop: 70, alignItems: 'center', textAlign: 'center' }}>
                            <Text style={[styles.signUpText, { textAlign: 'center' }]}>By signing in, I agree with
                                <Text style={[styles.signUpText, { fontSize: 15, color: '#285A84', fontWeight: 'bold', marginLeft: 40 }]}> Terms of Use and Privacy Policy</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Main>
    );
};

Login.defaultProps = {};

Login.propTypes = {};

export default Login;
