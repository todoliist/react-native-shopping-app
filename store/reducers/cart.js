import { ADD_TO_CART } from "../actions/cart"
import cartItem from '../../models/cart-item'
const initiaState = {
    items: {},
    totalAmount: 0
}

export default (state = initiaState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let updateOrNewCartItem;

            if (state.items[addedProduct.id]) {
                // already added the item in the cart
                 updateOrNewCartItem = new cartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                )
            } else {
                 updateOrNewCartItem = new cartItem(1, prodPrice, prodTitle, prodPrice)
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [addedProduct.id]: updateOrNewCartItem
                },
                totalAmount: state.totalAmount + prodPrice
            }
    }
    return state
}