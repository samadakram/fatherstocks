/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { render } from 'react-dom';
import { IconSearchNew, IconChevronRight } from '../Icons';
import styles from './styles';
import variables from '../../assets/styles/variables';
import useCategory from '../../core/category/useCategory';
import useProduct from '../../core/product/useProduct';
import * as RootNavigation from '../../core/utils/navigation';
import FlatListItem from '../FlatListItem';

const {
    API_URL,
} = require('../../core/constants').default;

let timeOut = 0;

const SearchBar = ({ initPlaceholder, placeholderColor, setModalVisible, text, setText }) => {

    const category = useSelector(state => state.category);

    const [isEditing, setIsEditing] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [dataListResult, setDataListResult] = useState([]);

    const [placeholder, setPlaceholder] = useState(initPlaceholder);
    const inputEl = useRef(null);

    const { categoryProductSearchRequest, getSubCategoryRequest } = useCategory();

    const { categoryProductRequest } = useProduct();

    useEffect(() => {
        setPlaceholder(initPlaceholder);
    }, [initPlaceholder]);

    const onSelectItemSearch = (item, type) => {

        console.log('ssss');
        // load sub category
        if (type === 1) {
            getSubCategoryRequest(item);
            setModalVisible(false);
        }

        // send user to product page
        if (type === 2) {
            RootNavigation.navigate('Product', {
                product: item,
            });
            setModalVisible(false);
        }
        // setText('');
        // inputEl.current.blur();
        // setShowResult(false);
        // setDataListResult([]);
        // if (onSelect) {
        //     onSelect(item);
        // }
    };

    const getSearchData = (txt) => {
        categoryProductSearchRequest(txt);
    };

    const changeText = (txt) => {

        setText(txt);

        if (txt === '' || txt === ' ') {
            setIsEditing(false);
            setShowResult(false);
            setDataListResult([]);
            return;
        }

        if (timeOut) {
            clearTimeout(timeOut);
        }

        timeOut = setTimeout(() => {
            getSearchData(txt);
        }, 1000);

        console.log('searchedResponseData', category?.searchedResponseData);

        setShowResult(true);
        setDataListResult(category?.searchedResponseData);
    };

    const handleChangeText = (val) => {
        setIsEditing(true);
        changeText(val);
    };

    const handleEndEditing = () => {
        setIsEditing(false);
        // setShowResult(false);
    };

    const leftContent = () => (
        <View style={styles.wrapperLeftContent}>
            <IconSearchNew f="#85C872" h={21} w={21} />
        </View>
    );

    const rightContent = () => (
        <View style={styles.wrapperRightContent}>
            <TextInput
                ref={inputEl}
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                autoCorrect={false}
                value={text}
                onChangeText={val => handleChangeText(val)}
                onEndEditing={() => handleEndEditing()} />
        </View>
    );

    // type 1=> category , 2=> product
    const itemResult = (item, index, type) => (
        <FlatListItem
            item={item}
            index={index}
            type={type}
            onPress={() => onSelectItemSearch(item, type)} />
    );

    const listResult = () => {
        if (dataListResult?.length < 0) return null;
        console.log('dataListResult', dataListResult);
        return (
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={styles.wrapperListResult}>
                { dataListResult?.category?.length > 0
                    ? dataListResult.category.map((item, index) => itemResult(item, index, 1))
                    : <></> }
                { dataListResult?.product?.length > 0
                    ? dataListResult.product.map((item, index) => itemResult(item, index, 2))
                    : <></>}
            </ScrollView>
        );
    };

    return (
        <View style={{ width: '90%', minHeight: 60, marginTop: 20 }}>
            <View style={styles.wrapper}>
                {leftContent()}
                {rightContent()}
            </View>
            {showResult && listResult()}
        </View>
    );
};

SearchBar.propTypes = {
    initPlaceholder: PropTypes.string,
    placeholderColor: PropTypes.string,
    dataListSearch: PropTypes.array,
    onSelect: PropTypes.func,
    setModalVisible: PropTypes.func,
    text: PropTypes.any,
    setText: PropTypes.any,
};

SearchBar.defaultProps = {
    initPlaceholder: '',
    text: '',
    setText: null,
    placeholderColor: variables.greyColor,
    dataListSearch: [],
    onSelect: null,
    setModalVisible: () => {},
};

export default React.memo(SearchBar);
