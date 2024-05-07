import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { PropTypes } from 'prop-types';

import { IconPlus } from '../Icons';
import styles from './styles';

const CircleControl = ({
    useCircleProgress,
    colorCircleProgress,
    icon,
    title,
    value,
    disabled,
    onPress,
}) => {

    const contentCircle = () => (
        <View style={styles.contentWrapper}>
            <View style={styles.contentCircle}>
                {icon}
            </View>
        </View>
    );

    return (
        <View style={styles.rootWrapper}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => onPress()}
                disabled={disabled}>
                <View style={styles.wrapper}>
                    {useCircleProgress ? (
                        <AnimatedCircularProgress
                            size={110}
                            width={10}
                            fill={value}
                            tintColor={colorCircleProgress}
                            backgroundColor="#FFFFFF">
                            {contentCircle}
                        </AnimatedCircularProgress>
                    )
                        : contentCircle()}
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{`${value}%`}</Text>
        </View>
    );
};

CircleControl.propTypes = {
    useCircleProgress: PropTypes.bool,
    colorCircleProgress: PropTypes.string,
    icon: PropTypes.element,
    title: PropTypes.string,
    value: PropTypes.number,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
};

CircleControl.defaultProps = {
    useCircleProgress: false,
    colorCircleProgress: '#C3C3C3',
    icon: <IconPlus f="#000000" />,
    title: 'Dial',
    value: 100,
    disabled: false,
    onPress: () => { },
};

export default React.memo(CircleControl);
