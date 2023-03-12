import React, { useContext } from 'react';
import { Box, HStack, Button, Badge } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FaShoppingCart } from 'react-icons/fa';
import ShoppingCartContext from '../Store/ShoppingCartContext';

export default function Layout(props) {
  const ctx = useContext(ShoppingCartContext);

  return (
    <Box textAlign="center">
      <HStack p="2" spacing="24px" justifyContent="flex-end">
        <Button
          leftIcon={<FaShoppingCart />}
          colorScheme="teal"
          variant="outline"
          onClick={e => ctx.onToggleCartList()}
        >
          <Badge p={'1'} borderRadius={'full'} colorScheme="green">
            {ctx.cartItems.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.quantity,
              0
            ) || 0}
          </Badge>
        </Button>
        <ColorModeSwitcher justifySelf="flex-end" />
      </HStack>
      {props.children}
    </Box>
  );
}
