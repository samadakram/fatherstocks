import React from 'react';
import { View, Modal, TouchableHighlight, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { isEmpty } from 'underscore';
// import {
//     API_URL,
// // eslint-disable-next-line import/no-unresolved
// } from '@env';
import { IconCross, IconCartAdded } from '../../Icons';
import styles from './styles';
import variables from '../../../assets/styles/variables';
import ButtonPrimary from '../../buttons/ButtonPrimary';
import common from '../../../assets/styles/common';
import * as RootNavigation from '../../../core/utils/navigation';

const ModalCart = ({ closeButton, visibility, onSetVisibility, cartProduct }) => {

    // const imgUrl = !isEmpty(cartProduct?.media) ? cartProduct?.media[0].stringUrl : `${API_URL}/img/no-image-available.jpeg`;

    const handleViewCart = () => {
        onSetVisibility(false);
        RootNavigation.navigate('MyCart');
    };

    return (
        <Modal animationType="fade" transparent visible={visibility}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {closeButton && (
                        <TouchableHighlight
                            style={styles.closeButton}
                            underlayColor={variables.lightGreyColor}
                            activeOpacity={0.5}
                            onPress={() => { onSetVisibility(false); }}>
                            <IconCross f={variables.blackColor} />
                        </TouchableHighlight>
                    )}
                    <View>
                        <IconCartAdded />
                        <Text style={styles.titleText}> ITEM ADDED TO CART</Text>
                    </View>
                    <View style={styles.itemBox}>
                        <View style={styles.imgHolder}>
                            {/* <Image style={styles.cardImage} source={{ uri: imgUrl }} /> */}
                        </View>
                        <View style={styles.infoHolder}>
                            <Text style={styles.itemTitleText}>{cartProduct?.name}</Text>
                            <Text style={styles.itemSubText}> { cartProduct?.size?.name ? `Size: ${cartProduct?.size.name}` : '' }</Text>
                            <Text style={styles.itemSubText}> { cartProduct?.condition?.name ? `Condition: ${cartProduct?.condition.name}` : '' }</Text>
                            <Text style={styles.itemSubText}> { cartProduct?.brand?.name ? `Brand: ${cartProduct?.brand?.name}` : '' }</Text>
                            <Text style={styles.itemPriceText}>£ {cartProduct?.price}</Text>
                        </View>
                    </View>
                    <ButtonPrimary
                        onPress={() => handleViewCart()}
                        btnStyle={[common.contactWhiteBox, { width: '80%' }]}
                        labelStyle={common.labelStyle}
                        title="View Cart" />

                </View>
            </View>
        </Modal>
    );
};

ModalCart.propTypes = {
    children: PropTypes.any,
    closeButton: PropTypes.bool,
    visibility: PropTypes.bool,
    onSetVisibility: PropTypes.func,
    cartProduct: PropTypes.any,
};

ModalCart.defaultProps = {
    children: null,
    closeButton: true,
    visibility: false,
    onSetVisibility: () => { },
    cartProduct: {},
};

export default ModalCart;
