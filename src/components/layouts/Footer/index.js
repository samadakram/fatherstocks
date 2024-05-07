import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import * as RootNavigation from '../../../core/utils/navigation';
import { IconHome, IconUser, IconPlusRound, IconUserFill, IconProductAdd } from '../../Icons';
import styles from './styles';
import variables from '../../../assets/styles/variables';

const Footer = () => {

    const routes = useNavigationState(state => state.routes);
    const currentRoute = routes[routes.length - 1]?.name;

    let homeColor = variables.brandBlueColor;
    let profileColor = <IconUser />;
    let productAddColor = <IconPlusRound f={variables.brandLightBlueColor} h={25} w={25} />;

    if (currentRoute !== 'Dashboard') {
        homeColor = variables.brandLightBlueColor;
    }

    if (currentRoute === 'PrductAddEdit') {
        productAddColor = <IconProductAdd />;
    }

    if (currentRoute === 'Profile' || currentRoute === 'MyProfile') {
        profileColor = <IconUserFill />;
    }

    const handleHomeClick = () => {
        RootNavigation.replace('Dashboard');
    };

    const handleProductClick = () => {
        RootNavigation.replace('PrductAddEdit');
    };

    const handleProfileClick = () => {
        RootNavigation.replace('Profile');
    };

    return (
        <View style={styles.footerContainer}>
            <TouchableWithoutFeedback onPress={handleHomeClick}>
                <View style={styles.linkContainer}>
                    <IconHome f={homeColor} h={25} w={25} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleProductClick}>
                <View style={styles.linkContainer}>
                    {productAddColor}
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleProfileClick}>
                <View style={styles.linkContainer}>
                    {profileColor}
                </View>
            </TouchableWithoutFeedback>
        </View>
    );

};

export default Footer;
