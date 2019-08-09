export const addItemToCart = (cartItems, itemToAdd) => {

    const existingInCartItems = cartItems.find(cartItem => (cartItem.id === itemToAdd.id));
    if (existingInCartItems) {
        return cartItems.map(cartItem => (
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
        );
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
}
export const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
}
export const decreaseItemQuantity = (cartItems, item) => {

    const CartItem = cartItems.find(cartItem => (cartItem.id === item.id));
    if (CartItem.quantity > 1) {
        return cartItems.map(cartItem => (
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        )
        )
    }

    return removeItemFromCart(cartItems, item);


}