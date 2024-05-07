import React from 'react';
import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { PropTypes } from 'prop-types';

import common from '../../../assets/styles/common';
import styles, { cardStyle, bigStyle, biggestStyle } from './styles';

const SubscriptionCard = ({ item }) => {
    let styleSize = cardStyle;

    if (item?.size === 'biggest') styleSize = biggestStyle;
    if (item?.size === 'big') styleSize = bigStyle;

    return (
        <>
            {item
                ? (
                    <Pressable
                        style={[styles.container, styleSize.container, common.shadowStrong]}
                        onPress={item.onPress}>
                        <View style={[styles.titleBg, styleSize.titleBg]}>
                            {item?.title
                                ? (<Text style={[styles.title, styleSize.title]}>{item?.title}</Text>) : null}
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={[styles.text, styles.textBold, styleSize.textBold]}>{item?.months}</Text>
                            <Text style={styles.text}>month{item?.months > 1 ? 's' : null}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                {item?.saving
                                    ? (
                                        <Text style={[styles.text, styles.textGreen, styles.textEmphasis]}>Save {item?.saving}</Text>
                                    ) : null}
                                <Text style={[styles.text, styles.textGreen]}>{item?.price}</Text>
                            </View>
                        </View>
                    </Pressable>
                ) : null}
        </>
    );
};

SubscriptionCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default SubscriptionCard;
