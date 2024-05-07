import React from 'react';
import { View, Modal, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { IconCross } from '../../Icons';
import styles from './styles';
import variables from '../../../assets/styles/variables';

const FlexibleModal = ({ children, closeButton, visibility, onSetVisibility }) => (
    <Modal animationType="fade" transparent visible={visibility}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {closeButton && (
                    <TouchableHighlight
                        style={styles.closeButton}
                        underlayColor={variables.lightGreyColor}
                        activeOpacity={0.5}
                        onPress={() => { onSetVisibility(false); }}>
                        <IconCross f={variables.greyColor} />
                    </TouchableHighlight>
                )}
                {children}
            </View>
        </View>
    </Modal>
);

FlexibleModal.propTypes = {
    children: PropTypes.any,
    closeButton: PropTypes.bool,
    visibility: PropTypes.bool,
    onSetVisibility: PropTypes.func,
};

FlexibleModal.defaultProps = {
    children: null,
    closeButton: true,
    visibility: false,
    onSetVisibility: () => { },
};

export default FlexibleModal;
