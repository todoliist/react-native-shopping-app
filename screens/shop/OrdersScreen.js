import React from 'react'
import { View, FlatList, Text, Platform } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../components/UI/HeaderButton'
import OrderItem from '../../components/shop/OrderItem'
const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders)
    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => <OrderItem
                amount={itemData.item.totalAmount}
                date={itemData.item.readableDate}
                items = {itemData.item.items}
            />}
        />
    )
}
OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Cart"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => { navData.navigation.toggleDrawer() }}
            />
        </HeaderButtons>,
    }
}
export default OrdersScreen