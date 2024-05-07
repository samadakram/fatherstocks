import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { IconAddCart } from '../Icons';

const {
    API_URL,
} = require('../../core/constants').default;

const CardElement = ({ item, onPress, handleDisplayAddToCart, hideAddToCart, cardTitleStyle, cardSubTitleStyle }) => {
    // const [popupVisible, setPopupVisible] = useState(false);

    // get first uploaded image
    const imgUrl = item?.media.length > 0 && item.media[0].stringUrl ? item.media[0].stringUrl : `${API_URL}/img/no-image-available.jpeg`;

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity key={item?.id} onPress={onPress}>
                <View style={styles.cardSubContainer}>
                    <View style={styles.cardImageOverlay}>
                        <Image style={styles.cardImage} source={{ uri: imgUrl }} />
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={cardTitleStyle || styles.cardTitle} numberOfLines={1}>{item?.name}</Text>
                        <Text style={cardSubTitleStyle || styles.cardSubtitle} numberOfLines={1}>£ {item?.price}</Text>
                    </View>

                    {hideAddToCart
                        ? (
                            <TouchableWithoutFeedback onPress={() => handleDisplayAddToCart(item)}>
                                <View style={styles.cartContainer}>
                                    <IconAddCart />
                                </View>
                            </TouchableWithoutFeedback>
                        )
                        : null }
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CardElement;

CardElement.propTypes = {
    navigation: PropTypes.object,
    onPress: PropTypes.func,
    item: PropTypes.any,
    handleDisplayAddToCart: PropTypes.any,
    hideAddToCart: PropTypes.bool,
    cardTitleStyle: PropTypes.object,
    cardSubTitleStyle: PropTypes.object,
};

CardElement.defaultProps = {
    navigation: {},
    onPress: () => {},
    item: {},
    handleDisplayAddToCart: false,
    hideAddToCart: true,
    cardTitleStyle: null,
    cardSubTitleStyle: null,
};
