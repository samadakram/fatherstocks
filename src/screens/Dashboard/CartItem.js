import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
    return (
        <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.quantityControls}>
                    <View>
                        <Text style={styles.additionalInfo}>{item.additionalInfo}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => onDecrease(item.id)}>
                            <Text style={styles.controlButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{item.quantity}</Text>
                        <TouchableOpacity onPress={() => onIncrease(item.id)}>
                            <Text style={styles.controlButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => onRemove(item.id)}>
                <Text style={styles.removeButton}>X</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: 'blue'
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    info: {
        flex: 1,
        backgroundColor: 'purple'
    },
    title: {
        fontSize: 16,
    },
    price: {
        color: '#FF5733',
        fontWeight: 'bold',
    },
    additionalInfo: {
        color: '#FF5733',
        fontSize: 12,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    controlButton: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    quantity: {
        fontSize: 16,
    },
    removeButton: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default CartItem;
