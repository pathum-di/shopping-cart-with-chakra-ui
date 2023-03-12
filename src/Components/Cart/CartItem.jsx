import React, { useContext } from 'react';
import {
  Card,
  CardBody,
  Text,
  Tooltip,
  IconButton,
  Stack,
  Flex,
  Box,
  Image,
  StackDivider,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import ShoppingCartContext from './../../Store/ShoppingCartContext';
import QuantityChanger from './../../UI/QuantityChanger';

export default function CartItem(props) {
  const ctx = useContext(ShoppingCartContext);
  const currentQuantity =
    ctx.cartItems.find(cartItem => cartItem.id === props.id)?.quantity || 0;

  return (
    <Card width={'100%'} variant="outline">
      <CardBody p={2}>
        <Flex gap="1">
          <Image
            objectFit="cover"
            borderRadius="lg"
            maxW={{
              base: '80px',
              sm: '100px',
            }}
            maxH="100%"
            src={props.image}
            alt={props.name}
          />
          <Box px="2" mx="auto">
            <Text
              fontSize={{ base: 'sm', lg: "lg" }}
              fontWeight={'medium'}
              textAlign={['center', 'left', 'left']}
            >
              {props.name || ''}
            </Text>
            <Stack
              divider={<StackDivider borderColor="gray.200" />}
              direction={['column', 'row', 'row']}
            >
              <Text
                my="auto"
                fontSize="sm"
                fontWeight={'medium'}
              >{`Unit Price : ${props.price || 0}`}</Text>
              <QuantityChanger
                currentQuantity={currentQuantity}
                onIncrement={ctx.onIncreaseItemQuantity}
                onDecrement={ctx.onDecreaseItemQuantity}
                productId={props.id}
                maxQuantity={props.stockQuantity}
              />
              <Text
                my="auto"
                fontSize="sm"
                fontWeight={'medium'}
              >{`Item Total : ${(props.quantity * props.price).toFixed(2) || 0}`}</Text>
              <Tooltip hasArrow label="Remove Item" placement="top">
                <IconButton
                  mx="auto"
                  variant="outline"
                  colorScheme="red"
                  aria-label="Remove Item"
                  size="sm"
                  icon={<DeleteIcon />}
                  isRound
                  onClick={(e) => ctx.onRemoveItemFromCart(props.id)}
                />
              </Tooltip>
            </Stack>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}
