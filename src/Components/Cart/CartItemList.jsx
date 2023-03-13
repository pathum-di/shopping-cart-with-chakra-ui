import { VStack, Alert, AlertIcon } from '@chakra-ui/react';
import CartSummary from './CartSummary';
import CartItem from './CartItem';

const CartItemList = props => {
  const totalPrice = props.cartItemList
    .reduce(
      (accumulator, currentValue) =>
        currentValue.quantity * currentValue.price + accumulator,
      0
    )
    .toFixed(2);

  console.log({ cartItemList: props.cartItemList });
  return (
    <VStack>
      {props.cartItemList.length > 0 && (
        <>
          {props.cartItemList.map(cartItem => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))}
          <CartSummary totalPrice={totalPrice} />
        </>
      )}
      {props.cartItemList.length === 0 && (
        <Alert status="warning">
          <AlertIcon />
          Your Cart is empty !
        </Alert>
      )}
    </VStack>
  );
};

export default CartItemList;
