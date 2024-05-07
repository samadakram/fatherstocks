import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './styles';
import { IconChevronRight, IconChevronLeft } from '../Icons';

const SubCategory = () => {

    const category = useSelector(state => state.category);

    // const handleCategoryClick = (cat) => {
    //     console.log(cat);
    // };

    const renderRow = (item, index) => {
        console.log('yes');
        return (
            <TouchableOpacity key={index}>
                <View style={index === 1
                    ? [styles.itemResult1, styles.itemResultSelected]
                    : styles.itemResult1}>
                    <View style={styles.column}>
                        {/* {item.mediaUrl
                            ? (
                                <Image
                                    style={styles.imageHolder}
                                    source={item.mediaUrl} />
                            )
                            : ''} */}
                        <Text
                            style={index === 1
                                ? [styles.listItemSubTitle, styles.listItemSubTitleSelected]
                                : styles.listItemSubTitle}>
                            {item.name}
                        </Text>
                    </View>
                    <View style={[styles.column, styles.column2]}>
                        <IconChevronRight h={20} w={20} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };
    return (

        <View
            keyboardShouldPersistTaps="handled"
            style={styles.wrapperListResult1}>
            <Text style={styles.mainTitle}><IconChevronLeft f="black" /> Category</Text>
            <View>
                {category.subCategory.length > 0
                    ? category.subCategory.map((item, index) => renderRow(item, index))
                    : <></>}
            </View>
        </View>

    );
};

export default SubCategory;

SubCategory.propTypes = {
    navigation: PropTypes.object,
    onPress: PropTypes.func,
    categoryData: PropTypes.any,
};

SubCategory.defaultProps = {
    navigation: {},
    onPress: () => {},
    categoryData: {},
};
