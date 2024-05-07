import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const Spinner = (loaderStyle) => (
    <View style={loaderStyle}>
        <ActivityIndicator size={60} color="#285A84" />
    </View>
);

export default Spinner;

Spinner.propTypes = {
    loaderStyle: PropTypes.any,
};

Spinner.defaultProps = {
    loaderStyle: null,
};
