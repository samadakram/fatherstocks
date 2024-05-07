import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import FlatListCustomItem from './FlatListCustomItem';

const FlatListSelectItem = ({ item, index, onPress, selectedItem, screenIndex, flatlistTitleStyle, flatlistSubTitleStyle, itemResultStyle, columnLeftStyle, columnRightStyle }) => {

    const isSelected = selectedItem?.id === item?.id ? 1 : 0;

    // if custom parcel size show custom
    if (screenIndex === 'parcelSize' && item.is_custom) {
        return (
            <FlatListCustomItem
                item={item}
                index={index}
                onPress={onPress}
                selectedItem={selectedItem}
                screenIndex={screenIndex}
                flatlistSubTitleStyle={flatlistSubTitleStyle}
                itemResultStyle={itemResultStyle}
                columnLeftStyle={columnLeftStyle}
                columnRightStyle={columnRightStyle}
                flatlistTitleStyle={flatlistTitleStyle} />
        );
    }

    return (
        <TouchableOpacity key={index} onPress={() => { onPress(item); }}>
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

            </View>
        </TouchableOpacity>
    );
};

export default FlatListSelectItem;

FlatListSelectItem.propTypes = {
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

FlatListSelectItem.defaultProps = {
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
