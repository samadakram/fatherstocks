import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Main from '../../components/layouts/Main';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import CartItem from './CartItem';
import { cartData } from './config/cartData';

const Dashboard = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [cartItems, setCartItems] = useState(cartData || []);

    const calculateTotal = () => {
        return cartItems.reduce(
            (acc, item) => item.selected ? acc + item.price * item.quantity : acc,
            0
        );
    };

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

    const onSelect = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    const deleteSelectedItems = () => {
        setCartItems((prevItems) => prevItems.filter((item) => !item.selected));
    };


    return (
        <Main modalVisible={modalVisible} setModalVisible={setModalVisible}>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#FFD4C7', '#EFF3D3']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.header}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={{ fontWeight: '900', fontSize: 25, color: '#000' }}>{"<"}</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Shopping cart ({cartItems.length})</Text>
                    <TouchableOpacity style={styles.deleteButton} onPress={deleteSelectedItems}>
                        <Text style={{ color: '#000' }}>{"🗑️"}</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <CartItem
                            item={item}
                            onRemove={onRemove}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                            onSelect={onSelect}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.list}
                />
                <View style={styles.bottomBar}>
                    <Text style={styles.totalPrice}>${calculateTotal().toFixed(2)}</Text>
                    <TouchableOpacity style={styles.checkoutButton}>
                        <Text style={styles.checkoutButtonText}>Checkout ({cartItems.filter(item => item.selected).length})</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Main>
    );
};

export default Dashboard;
