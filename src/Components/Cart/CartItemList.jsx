import { VStack, Alert, AlertIcon } from '@chakra-ui/react';

import CartItem from './CartItem';

const CartItemList = props => {
  return (
    <VStack>
      {props.cartItemList.length > 0 &&
        props.cartItemList.map(cartItem => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      {props.cartItemList.length === 0 &&
        <Alert status='warning'>
          <AlertIcon />
          Your Cart is empty !
        </Alert>}
    </VStack>
  );
};

export default CartItemList;
