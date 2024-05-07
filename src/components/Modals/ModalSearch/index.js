import React, { useState } from 'react';
import { View, Modal, TouchableHighlight, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { isNull } from 'underscore';
import { IconCross } from '../../Icons';
import styles from './styles';
import variables from '../../../assets/styles/variables';
import SearchBar from '../../SearchBar';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import useCategory from '../../../core/category/useCategory';

const search = require('../../../assets/images/search.png');

const ModalSearch = ({ children, closeButton, visibility, setModalVisible }) => {

    const [text, setText] = useState('');

    const { categoryProductSearchRequest } = useCategory();

    const handleSearchBtn = () => {
        if (!isNull(text)) {
            console.log('text', text);
            categoryProductSearchRequest(text);
            setModalVisible(false);
        }
    };

    return (
        <Modal animationType="fade" transparent visible={visibility}>
            <ImageBackground
                source={search}
                style={{ height: null,
                    width: '100%',
                    resizeMode: 'cover',
                    overflow: 'hidden',
                    flex: 1 }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {closeButton && (
                            <TouchableHighlight
                                style={styles.closeButton}
                                underlayColor={variables.lightGreyColor}
                                activeOpacity={0.5}
                                onPress={() => { setModalVisible(false); }}>
                                <IconCross f={variables.whiteColor} />
                            </TouchableHighlight>
                        )}
                        {/* <SubCategory /> */}
                        <View style={styles.searchContainer}>
                            <SearchBar
                                text={text}
                                setText={setText}
                                setModalVisible={setModalVisible}
                                filterProp="name" />
                        </View>
                        {children}
                        <View style={{ position: 'absolute', marginTop: -50 }}>
                            <ButtonPrimary onPress={() => { handleSearchBtn(); }}
                                labelStyle={styles.bottomButtonLabel}
                                style={styles.bottomButton}
                                title="Search" />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </Modal>
    );
};

ModalSearch.propTypes = {
    children: PropTypes.any,
    closeButton: PropTypes.bool,
    visibility: PropTypes.bool,
    setModalVisible: PropTypes.func,
};

ModalSearch.defaultProps = {
    children: null,
    closeButton: true,
    visibility: false,
    setModalVisible: () => {},
};

export default ModalSearch;
