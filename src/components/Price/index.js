import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ButtonPrimary from '../buttons/ButtonPrimary';
import { setPriceSuccess } from '../../core/filter/filterActions';

const Price = ({ navigation }) => {

    const { price } = useSelector(state => state.filter);
    const dispatch = useDispatch();
    console.log('price', price);
    const [textFrom, setTextFrom] = React.useState(price?.priceFrom);
    const [textTo, setTextTo] = React.useState(price?.priceTo);

    const handleBtnClick = () => {
        console.log(textFrom, textTo);
        const data = { textFrom, textTo };
        dispatch(setPriceSuccess(data));
        navigation.goBack();
    };

    return (
        <>
            <View style={styles.priceContainer}>
                <View style={styles.Column}>
                    <Text style={styles.priceTitle}> Price from </Text>
                    <View>
                        <Text style={styles.priceSymbol}>£</Text>
                        <TextInput
                            keyboardType="number-pad"
                            style={styles.input}
                            onChangeText={setTextFrom}
                            value={textFrom.toString()} />
                    </View>
                </View>
                <View style={styles.Column}>
                    <Text style={styles.priceTitle}> To </Text>
                    <View>
                        <Text style={styles.priceSymbol}> £</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setTextTo}
                            value={textTo.toString()} />
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.submitContainer}>
                    <ButtonPrimary
                        title="Apply"
                        labelStyle={styles.labelStyle}
                        style={styles.saveButton}
                        onPress={handleBtnClick} />
                </View>
            </View>
        </>
    );
};

export default Price;

Price.propTypes = {
    navigation: PropTypes.object,
    onPress: PropTypes.func,
};

Price.defaultProps = {
    navigation: {},
    onPress: () => {},
};
