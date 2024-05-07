import React from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Input = ({
    label,
    style,
    inputStyle,
    labelStyle,
    onChangeText,
    value,
    autoCompleteType,
    keyboardType,
    placeholder,
}) => (
    <View style={[styles.wrapper, style]}>
        {label
            ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
        <TextInput
            style={[styles.textInput, inputStyle]}
            autoCompleteType={autoCompleteType}
            keyboardType={keyboardType}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value} />
    </View>
);

export default Input;

Input.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object,
    inputStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    autoCompleteType: PropTypes.string,
    keyboardType: PropTypes.string,
    placeholder: PropTypes.any,
};

Input.defaultProps = {
    label: null,
    style: {},
    inputStyle: {},
    labelStyle: {},
    onChangeText: null,
    value: null,
    autoCompleteType: 'name',
    keyboardType: 'default',
    placeholder: null,
};
