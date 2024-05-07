import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { isEmpty, map } from 'underscore';
import styles from './styles';
import { IconCross, IconSort } from '../Icons';
import variables from '../../assets/styles/variables';
import { removeSelectedFilter } from '../../core/filter/filterActions';
import displayCardsConfig from '../../screens/Dashboard/config';

const Filter = ({ onPress }) => {

    const dispatch = useDispatch();
    const displayConfig = displayCardsConfig.products;
    const filters = useSelector(state => state.filter);

    const selectedFilters = filters?.selectedFilters;

    // on press of selected filter send redux request
    const onChipPress = (selectedFilter) => {
        const { parentFilter, id } = selectedFilter;
        dispatch(removeSelectedFilter({ filter: parentFilter, selected: id }));

        // current active filters
        const query = displayConfig.selectedFilterQuery(selectedFilters);
        dispatch(displayConfig.request(query));
    };

    const renderSelectedFilterChip = (selectedFilter) => {

        console.log('renderSelectedFilterChip');

        return (
            <TouchableOpacity key={selectedFilter.id} onPress={() => onChipPress(selectedFilter)}>
                <View style={styles.filterChip}>
                    <Text style={styles.filterChipText}>{selectedFilter.name}</Text>
                    <View style={styles.chipIconContainer}>
                        <IconCross h={12} w={12} f={variables.whiteColour} strokeWidth={3} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const renderSelectedFilterChips = (selectedFilter) => {
        const { selected, filter, filterType } = selectedFilter;
        // console.log('selectedFilter', selectedFilter);
        return (
            map(selected, f => renderSelectedFilterChip({ ...f, parentFilter: filter, filterType }))
        );
    };

    const renderFilterButton = () => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Filter & Sort</Text>
                <View style={styles.iconContainer}>
                    <IconSort />
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderSelectedFilters = () => {

        if (!selectedFilters || isEmpty(selectedFilters)) {
            return null;
        }

        return (
            map(selectedFilters, ({ selected, filterType }, filter) => renderSelectedFilterChips({ selected, filter, filterType }))
        );
    };

    return (
        <View style={styles.mainContainer}>
            {renderFilterButton()}
            {selectedFilters && !isEmpty(selectedFilters) ? (
                <View style={styles.chipContainer}>
                    {renderSelectedFilters()}
                </View>
            ) : null}
        </View>
    );
};

export default Filter;

Filter.propTypes = {
    onPress: PropTypes.func,
};

Filter.defaultProps = {
    onPress: () => { },
};
