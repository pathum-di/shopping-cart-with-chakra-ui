import React, { useContext } from 'react';
import {
  Text,
  Tooltip,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { FaCartPlus } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';
import ShoppingCartContext from './../../Store/ShoppingCartContext';
import QuantityChanger from '../../UI/QuantityChanger';

export default function ShoppingItem(props) {
  const ctx = useContext(ShoppingCartContext);
  const isAddedToCart = ctx.cartItems.find(
    cartItem => cartItem.id === props.id
  );
  const currentQuantity =
    ctx.cartItems.find(cartItem => cartItem.id === props.id)?.quantity || 0;

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={'100%'}
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={props.image}
        alt={props.name}
      />

      <Stack mx="auto">
        <CardBody p={2}>
          <Heading size="md">{props.name}</Heading>
          <Text py="2">{props.description}</Text>
          <Text size="md" fontWeight={'semibold'}>
            ${props.price}
          </Text>
        </CardBody>
        <CardFooter p={2}>
          {!isAddedToCart ? (
            <Tooltip hasArrow label="Add to Cart" placement="top">
              <IconButton
                mx="auto"
                variant="outline"
                colorScheme="teal"
                aria-label="Add to Cart"
                size="sm"
                icon={<FaCartPlus />}
                onClick={e => ctx.onAddItemToCart(props)}
              />
            </Tooltip>
          ) : (
            <Flex align={'center'} direction="row">
              <QuantityChanger
                currentQuantity={currentQuantity}
                onIncrement={ctx.onIncreaseItemQuantity}
                onDecrement={ctx.onDecreaseItemQuantity}
                productId={props.id}
                maxQuantity={props.stockQuantity}
              />
              <Tooltip hasArrow label="Remove From Cart" placement="top">
                <IconButton
                  mx="auto"
                  variant="outline"
                  colorScheme="teal"
                  aria-label="Remove From Cart"
                  size="sm"
                  icon={<MdRemoveShoppingCart />}
                  onClick={e => ctx.onRemoveItemFromCart(props.id)}
                />
              </Tooltip>
            </Flex>
          )}
        </CardFooter>
      </Stack>
    </Card>
  );
}
