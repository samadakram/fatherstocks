import React from 'react';
import { View, Modal } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ModalConfirm = ({ children, visibility }) => (
    <Modal animationType="fade" transparent visible={visibility}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {children}
            </View>
        </View>
    </Modal>
);

ModalConfirm.propTypes = {
    children: PropTypes.any,
    closeButton: PropTypes.bool,
    visibility: PropTypes.bool,
    onSetVisibility: PropTypes.func,
};

ModalConfirm.defaultProps = {
    children: null,
    closeButton: true,
    visibility: false,
    onSetVisibility: () => { },
};

export default ModalConfirm;
