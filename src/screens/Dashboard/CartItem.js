import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const CartItem = ({ item, onIncrease, onDecrease, onSelect }) => {
    return (
        <View style={styles.cartItem}>
            <Pressable style={styles.radio} onPress={() => onSelect(item.id)}>
                {item.selected && <View style={styles.radioSelected} />}
            </Pressable>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.quantityControls}>
                    <View>
                        <Text style={styles.additionalInfo}>{item.additionalInfo}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btn} onPress={() => onDecrease(item.id)}>
                            <Text style={styles.controlButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{item.quantity}</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => onIncrease(item.id)}>
                            <Text style={styles.controlButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
        marginTop: 5
    },
    radio: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#8A8B9D',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radioSelected: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#FF612F',
        borderColor: '#FF612F'
    },
    image: {
        marginRight: 10,
        width: 80,
        height: 80,
    },
    info: {
        flex: 1,
        paddingVertical: 5
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000',
        fontFamily: 'Aeonik',
        marginTop: 15
    },
    price: {
        fontWeight: '500',
        fontSize: 18,
        fontFamily: 'Aeonik',
        color: '#000'
    },
    additionalInfo: {
        color: '#FF612F',
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Aeonik',
        marginBottom: 5
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    controlButton: {
        fontSize: 25,
        marginHorizontal: 10,
        color: '#000'
    },
    quantity: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000'
    },
    removeButton: {
        color: 'red',
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#f6f6f6',
        borderRadius: 20,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    }
});

export default CartItem;
