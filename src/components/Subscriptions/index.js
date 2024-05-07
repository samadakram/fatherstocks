import React from 'react';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';

import SubscriptionCard from './SubscriptionCard';

import styles from './styles';

const Subscriptions = ({ data }) => (
    <View>
        {data && (
            <View style={styles.container}>
                {data && data.map((item, i) => <SubscriptionCard key={i} item={item} />)}
            </View>
        )}
    </View>
);

Subscriptions.propTypes = {
    data: PropTypes.array,
};

Subscriptions.defaultProps = {
    data: [],
};

export default Subscriptions;
