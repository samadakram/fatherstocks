import React, { useRef } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { PropTypes } from 'prop-types';

import {
    API_URL,
// eslint-disable-next-line import/no-unresolved
} from '@env';
import * as RootNavigation from '../../core/utils/navigation';
import { IconDots, IconChevronLeft } from '../Icons';

import styles from './styles';
import variables from '../../assets/styles/variables';

const CarouselCards = ({ product, sliderWidth, itemWidth, setDeleteModalVisible, shouldShow, setShouldShow, isProductSeller }) => {

    const isCarousel = useRef(null);
    const [index, setIndex] = React.useState(0);

    const mediaData = product?.media;

    const handleEditProduct = () => {
        RootNavigation.navigate('PrductAddEdit', { productData: product });
    };

    const _renderItem = (item) => {

        const imgUrl = item?.item?.stringUrl || `${API_URL}/img/no-image-available.jpeg`;
        return (
            <View style={styles.container} key={index}>
                <ImageBackground
                    source={{ uri: imgUrl }}
                    key={index}
                    style={styles.imageStyle}>
                    <TouchableOpacity style={styles.backBox} onPress={() => RootNavigation.goBack()}>
                        <IconChevronLeft h={24} f="#303030" />
                    </TouchableOpacity>
                    {isProductSeller
                        ? (
                            <TouchableOpacity style={styles.rightBox} onPress={() => setShouldShow(!shouldShow)}>
                                <IconDots />
                            </TouchableOpacity>
                        )
                        : null}
                    {shouldShow
                        ? (
                            <View style={styles.openBoxStyle}>
                                <TouchableOpacity onPress={() => handleEditProduct()} style={styles.boxItem}>
                                    <Text style={styles.boxItemText}> Edit </Text>
                                </TouchableOpacity>
                                <View style={styles.bottomBorder} />
                                <TouchableOpacity onPress={() => setDeleteModalVisible(true)} style={styles.boxItem}>
                                    <Text style={styles.boxItemText}> Delete </Text>
                                </TouchableOpacity>
                            </View>
                        )
                        : null }
                </ImageBackground>
            </View>
        );
    };

    return (
        <View>
            {mediaData?.length > 0 ? (
                <View>
                    <Carousel
                        layout="default"
                        layoutCardOffset={9}
                        ref={isCarousel}
                        data={mediaData}
                        shouldShow={shouldShow}
                        setShouldShow={setShouldShow}
                        renderItem={(item) => _renderItem(item)}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        inactiveSlideShift={0}
                        onSnapToItem={(newIndex) => setIndex(newIndex)}
                        useScrollView />
                    <View style={styles.paginationStyle}>
                        <Pagination
                            dotsLength={mediaData.length}
                            activeDotIndex={index}
                            carouselRef={isCarousel}
                            dotStyle={styles.dotStyle}
                            inactiveDotScale={0.6}
                            tappableDots />
                    </View>
                </View>
            )
                : _renderItem()}
        </View>
    );
};

CarouselCards.propTypes = {
    product: PropTypes.any,
    sliderWidth: PropTypes.number,
    itemWidth: PropTypes.number,
    setDeleteModalVisible: PropTypes.func,
    setShouldShow: PropTypes.func,
    shouldShow: PropTypes.bool,
    isProductSeller: PropTypes.number,
};

CarouselCards.defaultProps = {
    product: {},
    shouldShow: false,
    sliderWidth: variables.screenWidth,
    itemWidth: variables.screenWidth,
    setDeleteModalVisible: () => {},
    setShouldShow: () => {},
    isProductSeller: 0,
};

export default CarouselCards;
