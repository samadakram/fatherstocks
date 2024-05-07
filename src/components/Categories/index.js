import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { isNull, isEmpty, findIndex } from 'underscore';
import PropTypes from 'prop-types';
import useCategory from '../../core/category/useCategory';
import useProduct from '../../core/product/useProduct';
import styles from './styles';
import Spinner from '../Loaders/Spinner';

const Categories = () => {

    const { categoryRequest, selectCategoryRequest, category } = useCategory();

    const { categoryProductRequest } = useProduct();

    useEffect(() => {
        categoryRequest();
        if (isNull(category?.categoriesData)) {
            categoryRequest();
            categoryProductRequest();
        } else {
            const catIds = category?.selectedCategory?.map(catg => catg.id).join(',');
            categoryProductRequest(catIds);
        }
    }, []);

    const handleCategoryClick = (cat) => {
        selectCategoryRequest(cat);
        const catIds = category?.selectedCategory?.map(catg => catg.id).join(',');
        console.log('catcatcat', catIds);
        categoryProductRequest(catIds);
    };

    const renderSingleCategory = (cat) => {

        const valExistIndex = findIndex(category?.selectedCategory, (item) => item?.id === cat?.id);

        return (
            <TouchableOpacity key={cat.id} onPress={() => handleCategoryClick(cat)}>
                <View style={styles.categoryContainer}>
                    <View style={valExistIndex > -1
                        ? [styles.categoryContainerItem, styles.categoryContainerItemActive]
                        : styles.categoryContainerItem}>
                        <Image style={styles.cardImage} source={{ uri: cat?.mediaUrl }} />
                    </View>
                    <Text style={styles.categoryTitle}>{cat?.name} </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            {category?.isFetching ? <Spinner />
                : (
                    <ScrollView horizontal style={{ marginTop: 10, marginBottom: 40, marginLeft: 0 }}>
                        { !isEmpty(category?.categoriesData)
                            ? category?.categoriesData.map((cat) => (
                                renderSingleCategory(cat)
                            ))
                            : <></>}
                    </ScrollView>
                )}
        </View>
    );
};

export default Categories;

Categories.propTypes = {
    navigation: PropTypes.object,
    onPress: PropTypes.func,
    categoryData: PropTypes.any,
};

Categories.defaultProps = {
    navigation: {},
    onPress: () => {},
    categoryData: {},
};
