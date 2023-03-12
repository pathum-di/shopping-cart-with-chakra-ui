import React, { useContext } from 'react';
import { VStack } from '@chakra-ui/react';
import ShoppingItem from './../Shopping/ShoppingItem';
import ShoppingCartContext from './../../Store/ShoppingCartContext';
import CartPopUp from '../Cart/CartPopUp';
import CartItemList from '../Cart/CartItemList';

const ShoppingItemList = () => {
  const ctx = useContext(ShoppingCartContext);

  return (
    <>
      <VStack maxW={'xl'} align={'center'} mx="auto" px={['2', '2', '0']}>
        {ctx.shoppingItems.map(cartItem => (
          <ShoppingItem key={cartItem.id} {...cartItem} />
        ))}
      </VStack>
      <CartPopUp
        title={'Your Cart !'}
        toggle={ctx.onToggleCartList}
        isOpen={ctx.isOpenCartList}
        onConfirm={() => console.log('on confirm clicked')}
      >
        <CartItemList cartItemList={ctx.cartItems} />
      </CartPopUp>
    </>
  );
};

export default ShoppingItemList;
