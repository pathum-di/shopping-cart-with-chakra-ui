import React, { useState } from 'react';
import DUMMY_DATA from './../data.json';

const ShoppingCartContext = React.createContext({
  cartItems: [],
  isOpenCartList: false,
  shoppingItems: [],
  onAddItemToCart: item => {},
  onToggleCartList: () => {},
  onRemoveItemFromCart: itemId => {},
  onIncreaseItemQuantity: ItemId => {},
  onDecreaseItemQuantity: ItemId => {},
});

export default ShoppingCartContext;

export const ShoppingCartContextProvider = props => {
  const [isOpenCartList, setIsOpenCartList] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartListToggleHandler = () => {
    setIsOpenCartList(prevState => !prevState);
  };

  const addCartItemHandler = item => {
    const updatedItem = { ...item, quantity: 1 };
    setCartItems(prev => [...prev, updatedItem]);
  };

  const removeCartItemHandler = itemId => {
    setCartItems(prev => prev.filter(cartItem => cartItem.id !== itemId));
  };

  const increaseQuantityHandler = itemId => {
    setCartItems(prev =>
      prev.map(cartItem => {
        if (cartItem.id !== itemId) return cartItem;
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      })
    );
  };

  const decreaseQuantityHandler = itemId => {
    setCartItems(prev =>
      prev.map(cartItem => {
        if (cartItem.id !== itemId) return cartItem;
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      })
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems: cartItems,
        isOpenCartList: isOpenCartList,
        shoppingItems: DUMMY_DATA.items,
        onToggleCartList: cartListToggleHandler,
        onAddItemToCart: addCartItemHandler,
        onRemoveItemFromCart: removeCartItemHandler,
        onIncreaseItemQuantity: increaseQuantityHandler,
        onDecreaseItemQuantity: decreaseQuantityHandler,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
