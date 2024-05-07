import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import * as RootNavigation from '../../core/utils/navigation';

import styles from './styles';

import { IconProfileImg, IconProfileSmallImg } from '../IconsProfile';

const MyProfileSection = ({ itemCount }) => {

    const auth = useSelector(state => state.auth);

    const userName = auth?.userData?.first_name || `${auth?.userData?.last_name}` || '';

    return (
        <View style={styles.profileBox}>
            <View style={styles.imgContainer}>
                {itemCount || itemCount === 0
                    ? <IconProfileSmallImg /> : <IconProfileImg />}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.profileTitleText}> {userName !== '' ? userName : 'My Profile' } </Text>
                {itemCount || itemCount === 0
                    ? (
                        <TouchableOpacity>
                            <Text style={[styles.profileTitleDesc, { color: '#808080' }]}> {itemCount} item
                            </Text>
                        </TouchableOpacity>
                    )
                    : (
                        <TouchableOpacity onPress={() => RootNavigation.replace('MyProfile')}>
                            <Text style={styles.profileTitleDesc}> View my profile
                            </Text>
                        </TouchableOpacity>
                    )}
            </View>
        </View>
    );
};

export default MyProfileSection;

MyProfileSection.propTypes = {
    navigation: PropTypes.object,
    onPress: PropTypes.func,
    categoryData: PropTypes.any,
    itemCount: PropTypes.any,
};

MyProfileSection.defaultProps = {
    navigation: {},
    onPress: () => {},
    categoryData: {},
    itemCount: null,
};
