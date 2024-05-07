import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { IconSort } from '../../Icons';

import styles from './styles';

const ButtonPrimary = ({ btnStyle, disabled, icon, labelStyle, shadow, style, title, onPress, iconRight }) => (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPress()}
        disabled={disabled}
        style={[
            btnStyle || styles.btnStyle,
            shadow ? styles.shadow : null,
            style,
            disabled ? styles.touchableDisabled : null,
        ]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {icon ? (<View style={{ marginRight: 10 }}>{icon}</View>) : null}
            <Text style={[
                styles.btnLabel,
                labelStyle,
                disabled ? styles.textDisabled : null]}>{title}
            </Text>
            {iconRight ? (
                <View style={{ marginLeft: 10 }}>
                    <IconSort />
                </View>
            ) : null}
        </View>
    </TouchableOpacity>
);

ButtonPrimary.propTypes = {
    disabled: PropTypes.bool,
    icon: PropTypes.any,
    iconRight: PropTypes.any,
    btnStyle: PropTypes.any,
    labelStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array]),
    title: PropTypes.string,
    shadow: PropTypes.bool,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array]),
    onPress: PropTypes.func,
};

ButtonPrimary.defaultProps = {
    disabled: false,
    icon: null,
    iconRight: null,
    labelStyle: {},
    btnStyle: null,
    shadow: false,
    style: {},
    title: 'OK',
    onPress: () => { },
};

export default ButtonPrimary;
