import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-switch';
import { PropTypes } from 'prop-types';

import styles from './styles';

const SwitchPrimary = ({
    initValue,
    getValue,
    topLabel,
    bottomLabel,
    colorTopLabel,
    colorBottomLabel,
}) => {
    const [isEnable, setEnable] = useState(initValue);

    const changeStatus = (val) => {
        setEnable(!isEnable);
        getValue(val);
    };

    return (
        <View style={styles.wrapper}>
            {(topLabel !== null || topLabel !== '') && <Text style={[styles.topLabel, { color: colorTopLabel }]}>{topLabel}</Text>}
            <Switch
                value={isEnable}
                onValueChange={(val) => changeStatus(val)}
                disabled={false}
                circleSize={30}
                barHeight={30}
                circleBorderWidth={0}
                backgroundActive="#B3DB8E"
                backgroundInactive="#CFD6DA"
                circleActiveColor="#FFFFFF"
                circleInActiveColor="#FFFFFF"
                changeValueImmediately // if rendering inside circle, change state immediately or wait for animation to complete
                renderActiveText={false}
                renderInActiveText={false}
                switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                switchBorderRadius={0}
                containerStyle={{ marginHorizontal: 3.5 }} />
            {(bottomLabel !== null || bottomLabel !== '') && <Text style={[styles.bottomLabel, { color: colorBottomLabel }]}>{bottomLabel}</Text>}
        </View>
    );
};

SwitchPrimary.propTypes = {
    bottomLabel: PropTypes.string,
    colorBottomLabel: PropTypes.string,
    colorTopLabel: PropTypes.string,
    initValue: PropTypes.bool,
    topLabel: PropTypes.string,
    getValue: PropTypes.func,
};

SwitchPrimary.defaultProps = {
    bottomLabel: null,
    colorBottomLabel: null,
    colorTopLabel: null,
    initValue: false,
    topLabel: null,
    getValue: () => { },
};

export default React.memo(SwitchPrimary);
