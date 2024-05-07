import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../styles';

// eslint-disable-next-line no-unused-vars
const FlatListCustomItem = ({ item, index, onPress, selectedItem, flatlistTitleStyle, flatlistSubTitleStyle, itemResultStyle, columnLeftStyle, columnRightStyle }) => {

    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [depth, setDepth] = useState('');

    const isSelected = selectedItem?.id === item?.id ? 1 : 0;
    const handleCustomPress = () => {
        onPress({ ...item, length, depth, width });
    };

    return (
        <TouchableOpacity key={index} onPress={() => handleCustomPress()}>
            <View key={index}
                style={isSelected
                    ? [styles.itemResultDrillDown, styles.itemResultSelected]
                    : styles.itemResultDrillDown}>
                <View style={styles.itemResultDrillDownColumnTitle}>
                    <View style={styles.titleBox}>
                        <Text
                            style={isSelected
                                ? [styles.listItemSubTitle, styles.listItemSubTitleSelected]
                                : styles.listItemSubTitle}>
                            {item?.name}
                        </Text>
                    </View>
                    {item?.description
                        ? (
                            <View style={styles.subTitleBox}>
                                <Text style={styles.subTitle}>{item?.description}</Text>
                            </View>
                        )
                        : null }
                </View>
                <View style={[styles.itemResultDrillDownColumnIcon]}>

                    <View style={isSelected
                        ? [styles.circle, styles.circleSelected]
                        : styles.circle} />

                </View>
                <View style={styles.customBox}>
                    <Text style={styles.customHeading}>
                        Custom size
                    </Text>
                    <View style={styles.customBoxSize}>
                        <View style={styles.customBoxElement}>
                            <Text style={styles.subTitle}> Length </Text>
                            <TextInput
                                maxLength={4}
                                onChangeText={setLength}
                                value={length.toString()}
                                placeholder="0 cm"
                                style={[styles.inputStyle, {}]} />
                        </View>
                        <View style={styles.customBoxElement}>
                            <Text style={styles.subTitle}> Width </Text>
                            <TextInput
                                onChangeText={setWidth}
                                value={width.toString()}
                                maxLength={4}
                                placeholder="0 cm"
                                style={[styles.inputStyle, {}]} />
                        </View>
                        <View style={styles.customBoxElement}>
                            <Text style={styles.subTitle}> Depth </Text>
                            <TextInput
                                onChangeText={setDepth}
                                value={depth.toString()}
                                maxLength={4}
                                placeholder="0 cm"
                                style={[styles.inputStyle, {}]} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

};

export default FlatListCustomItem;

FlatListCustomItem.propTypes = {
    onPress: PropTypes.func,
    item: PropTypes.any,
    index: PropTypes.any,
    itemResultStyle: PropTypes.any,
    flatlistSubTitleStyle: PropTypes.any,
    flatlistTitleStyle: PropTypes.any,
    columnLeftStyle: PropTypes.any,
    columnRightStyle: PropTypes.any,
    selectedItem: PropTypes.any,
    screenIndex: PropTypes.any,
};

FlatListCustomItem.defaultProps = {
    onPress: () => {},
    item: {},
    index: 1,
    flatlistTitleStyle: null,
    flatlistSubTitleStyle: null,
    itemResultStyle: null,
    columnLeftStyle: null,
    columnRightStyle: null,
    selectedItem: {},
    screenIndex: null,
};
