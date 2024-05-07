import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableNativeFeedback,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const view = require('../../../assets/images/view.png');

const InputPassword = ({
    label,
    style,
    inputStyle,
    labelStyle,
    onChangeText,
    value,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={style}>
            {label
                ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
            <View style={[styles.wrapper]}>
                <TextInput
                    style={[styles.textInput, inputStyle]}
                    autoCompleteType="password"
                    secureTextEntry={!showPassword}
                    textContentType="password"
                    onChangeText={onChangeText}
                    value={value} />
                <TouchableNativeFeedback
                    onPressIn={() => setShowPassword(true)}
                    onPressOut={() => setShowPassword(false)}>
                    <Image source={view} style={styles.icon} />
                </TouchableNativeFeedback>
            </View>
        </View>
    );
};

export default InputPassword;

InputPassword.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object,
    inputStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
};

InputPassword.defaultProps = {
    label: null,
    style: {},
    inputStyle: {},
    labelStyle: {},
    onChangeText: null,
    value: null,
};
