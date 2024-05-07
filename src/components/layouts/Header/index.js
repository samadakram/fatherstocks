import React, { useState } from 'react';
import { View, Image, Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as RootNavigation from '../../../core/utils/navigation';
import styles from './styles';
import { IconCart, IconFind, IconChevronLeft, IconCancel } from '../../Icons';
import logoImg from '../../../assets/images/logo.png';
import ModalSearch from '../../Modals/ModalSearch';

const Header = ({ withLogo, pageTitle, backLink, hideLink }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const renderHeaderLogo = () => (
        <View style={styles.header}>
            <Pressable onPress={() => { setModalVisible(true); }}>
                <View style={styles.iconFind}>
                    <IconFind />
                </View>
            </Pressable>

            <View style={styles.logoImg}>
                <Image
                    style={styles.mainIcon}
                    source={logoImg} />
            </View>
            <Pressable
                onPress={() => RootNavigation.navigate('MyCart')}
                style={styles.iconCart}>
                <IconCart />
            </Pressable>
            <ModalSearch visibility={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            {!hideLink
                ? (
                    <Pressable
                        onPress={() => {
                            if (backLink?.link) {
                                console.log('backlink', backLink);
                                if (backLink?.product) {
                                    RootNavigation.goBack();
                                    // RootNavigation.replace(backLink.link, { product: backLink.product });
                                } else if (backLink?.link === 'goBack') {
                                    console.log('aksjdasl', backLink);
                                    RootNavigation.goBack();
                                } else {
                                    RootNavigation.replace(backLink.link, { key: backLink.key });
                                }
                            } else if (backLink?.onPress) {
                                console.log('press');
                                backLink.onPress();
                            } else {
                                RootNavigation.replace('Profile');
                            }
                        }}>

                        <View style={styles.iconLeft}>
                            {backLink.icon ? <IconCancel />
                                : <IconChevronLeft f="#303030" />}
                        </View>
                    </Pressable>
                )
                : null }
            <View style={[styles.logoImg]}>
                <Text style={styles.titleText}>{pageTitle}</Text>
            </View>
        </View>
    );

    return (
        withLogo
            ? renderHeaderLogo()
            : renderHeader()
    );
};

Header.propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    withLogo: PropTypes.bool,
    pageTitle: PropTypes.string,
    hideLink: PropTypes.bool,
    backLink: PropTypes.object,
};

Header.defaultProps = {
    disabled: false,
    onPress: () => { },
    withLogo: false,
    pageTitle: null,
    hideLink: false,
    backLink: {},
};

export default Header;
