import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { IconChevronRight } from '../Icons';
import styles from './styles';

const FilterRow = ({ filterKey, item, itemText, selectedText, onPress, isSelected, drillDown, drillDownFinalRow, DrilldownCategory1 }) => {

    const renderDrilldownRow = () => (
        <TouchableOpacity onPress={() => { onPress(); }}>
            <View style={isSelected
                ? [styles.itemResultDrillDown, styles.itemResultSelected]
                : styles.itemResultDrillDown}>
                <View style={styles.itemResultDrillDownColumnTitle}>
                    {/* {item.mediaUrl
                                ? (
                                <Image
                                    style={styles.imageHolder}
                                    source={item.mediaUrl} />
                            )
                            : ''} */}
                    <Text
                        style={isSelected
                            ? [styles.listItemSubTitle, styles.listItemSubTitleSelected]
                            : styles.listItemSubTitle}>
                        {itemText}
                    </Text>
                </View>
                <View style={[styles.itemResultDrillDownColumnIcon]}>
                    {drillDownFinalRow
                        ? (
                            <View style={isSelected
                                ? [styles.circle, styles.circleSelected]
                                : styles.circle} />
                        )
                        : (
                            <IconChevronRight h={20} w={20} />
                        )}
                </View>

            </View>
        </TouchableOpacity>
    );

    const renderFilterRow = () => {

        // category level 1
        if (filterKey === 'categories' || DrilldownCategory1) {
            return (
                <TouchableOpacity onPress={() => { onPress(); }}>
                    <View style={isSelected
                        ? [styles.itemResultDrillDown, styles.itemResultSelected]
                        : styles.itemResultDrillDown}>
                        <View style={styles.itemResultDrillDownColumnTitle}>
                            <Text
                                style={isSelected
                                    ? [styles.listItemSubTitle, styles.listItemSubTitleSelected]
                                    : styles.listItemSubTitle}>
                                {item?.name}
                            </Text>
                        </View>
                        <View style={[styles.itemResultDrillDownColumnIcon]}>
                            <IconChevronRight h={20} w={20} />
                        </View>

                    </View>
                </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity onPress={() => { onPress(); }}>
                <View style={styles.itemFilterRow}>
                    <View style={styles.column}>
                        <Text
                            style={styles.itemFilterRowText}>
                            {filterKey === 'categories' ? item.name : itemText}
                        </Text>
                    </View>
                    <View style={[styles.column1]}>
                        <Text style={styles.selectedFilterText}> {selectedText || 'All' } </Text>
                    </View>
                    <View style={[styles.column2]}>
                        <IconChevronRight h={14} w={8} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return drillDown ? renderDrilldownRow() : renderFilterRow();
};

export default FilterRow;

FilterRow.propTypes = {
    itemText: PropTypes.string,
    selectedText: PropTypes.string,
    isSelected: PropTypes.bool,
    displayButton: PropTypes.bool,
    onPress: PropTypes.func,
    drillDown: PropTypes.bool,
    drillDownFinalRow: PropTypes.bool,
    item: PropTypes.any,
    filterKey: PropTypes.string,
    DrilldownCategory1: PropTypes.bool,
};

FilterRow.defaultProps = {
    selectedText: null,
    isSelected: false,
    displayButton: false,
    onPress: () => {},
    drillDown: false,
    drillDownFinalRow: true,
    item: {},
    filterKey: null,
    DrilldownCategory1: false,
};
