import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { isEmpty } from 'underscore';
import styles from './styles';
import { IconChevronRight } from '../Icons';

const FlatListItem = ({ item, index, type, onPress, flatlistTitleStyle, flatlistSubTitleStyle, itemResultStyle, columnLeftStyle, columnRightStyle, selectedItem }) => {

    const isSelected = +selectedItem?.id === +item?.id ? 1 : 0;

    console.log('selectedItem', selectedItem);
    console.log('item', item);
    console.log('isSelected', isSelected);

    const borderColor = isSelected === 1 ? styles.itemResultSelected : itemResultStyle;
    console.log(isSelected);

    const renderTitle = () => {
        if (type === 1) {
            return (<Text style={styles.listItemTitle}>Category</Text>);
        }
        if (type === 2) {
            return (<Text style={styles.listItemTitle}>Item</Text>);
        }

        return (<Text numberOfLines={1} style={flatlistTitleStyle || styles.listItemTitle}>{item?.title}</Text>);
    };

    const renderImg = () => {

        const imgUrl = !isEmpty(item?.media) ? item?.media[0].stringUrl : null;
        console.log(imgUrl);

        if (type === 1) {
            return (<IconChevronRight h={20} w={20} />);
        }
        if (type === 2) {
            return (<Image style={styles.imageHolder} source={{ uri: imgUrl }} />);
        }
        return (<IconChevronRight h={15} w={15} />);
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            key={`list_search_${index}`}>
            <View style={borderColor || styles.itemResult}>
                <View style={columnLeftStyle || styles.column}>
                    { renderTitle() }
                    {item?.name
                        ? <Text style={flatlistSubTitleStyle || styles.listItemSubTitle}>{item.name}</Text>
                        : null }
                </View>
                <View style={columnRightStyle || styles.column2}>
                    {!type
                        ? (
                            <View style={{ width: '80%' }}>
                                {item?.subCategory ? <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>{item?.subCategory?.name}</Text>
                                    : <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subTitle}>{item?.stateName?.name}</Text>}
                            </View>
                        )
                        : null }
                    <View style={{ width: '20%' }}>
                        {renderImg()}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default FlatListItem;

FlatListItem.propTypes = {
    onPress: PropTypes.func,
    item: PropTypes.any,
    index: PropTypes.any,
    type: PropTypes.any,
    itemResultStyle: PropTypes.any,
    flatlistSubTitleStyle: PropTypes.any,
    flatlistTitleStyle: PropTypes.any,
    columnLeftStyle: PropTypes.any,
    columnRightStyle: PropTypes.any,
    selectedItem: PropTypes.any,
};

FlatListItem.defaultProps = {
    onPress: () => {},
    item: {},
    index: 1,
    type: 0,
    flatlistTitleStyle: null,
    flatlistSubTitleStyle: null,
    itemResultStyle: null,
    columnLeftStyle: null,
    columnRightStyle: null,
    selectedItem: {},
};
