/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'underscore';
import * as RootNavigation from '../../core/utils/navigation';
import Main from '../../components/layouts/Main';
// import styles from './styles';
import useAuth from '../../core/auth/useAuth';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CartItem from './CartItem';

const Dashboard = () => {

    const { auth } = useAuth();
    const dispatch = useDispatch();

    const [modalVisible, setModalVisible] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: 'Tiara Muhallaba Dessert Mix 85...',
            price: 550.9,
            quantity: 1,
            additionalInfo: '15% Discount',
            image: 'https://via.placeholder.com/60',
        },
        {
            id: 2,
            title: 'Tiara Muhallaba Dessert Mix 85...',
            price: 550.9,
            quantity: 2,
            additionalInfo: '15% Discount',
            image: 'https://via.placeholder.com/60',
        },
        // Add other items as needed
    ]);

    const onIncrease = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const onDecrease = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const onRemove = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


    return (
        <Main displayFooter modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text>{"<"}</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Shopping cart ({cartItems.length})</Text>
                    <TouchableOpacity style={styles.deleteButton}>
                        <Text>{"🗑️"}</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <CartItem
                            item={item}
                            onRemove={onRemove}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.list}
                />
                <View style={styles.bottomBar}>
                    <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
                    <TouchableOpacity style={styles.checkoutButton}>
                        <Text style={styles.checkoutButtonText}>Checkout ({cartItems.length})</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Main>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    backButton: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    deleteButton: {
        padding: 10,
    },
    list: {
        flex: 1,
    },
    bottomBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    checkoutButton: {
        backgroundColor: '#FF5733',
        padding: 10,
        borderRadius: 5,
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 16,
    },
});


export default Dashboard;
