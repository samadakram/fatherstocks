import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import { IconCheckbox } from '../../Icons';

const CheckboxOption = (props) => {

    const { value, optionValue, customStyle, onChange, customLabel } = props;
    let { checked } = props;

    if (!checked) {
        checked = value === optionValue;
    }

    const changeValue = () => {
        console.log('pepepep');
        onChange(optionValue);
    };

    return (
        <TouchableOpacity onPress={() => changeValue()} style={[styles.radioItem, customStyle]} activeOpacity={0.7}>
            {checked
                ? (
                    <IconCheckbox />
                )
                : <View style={styles.radioWrapperNormal} />}
            {customLabel}
        </TouchableOpacity>
    );
};

CheckboxOption.propTypes = {
    label: PropTypes.string,
    customLabel: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.bool]),
    optionValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func.isRequired,
    customStyle: PropTypes.object,
    customLabelStyle: PropTypes.object,
    checked: PropTypes.bool,
};

CheckboxOption.defaultProps = {
    label: '',
    customLabel: null,
    value: '',
    optionValue: '',
    customStyle: {},
    customLabelStyle: {},
    checked: false,
};

export default CheckboxOption;
