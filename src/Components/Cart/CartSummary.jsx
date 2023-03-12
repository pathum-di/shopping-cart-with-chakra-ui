import { Card, CardBody, Text, Flex } from '@chakra-ui/react';

const CartSummary = props => {
  return (
    <Card width={'100%'} variant="outline">
      <CardBody p={2}>
        <Flex justifyContent={'space-between'}>
          <Text fontSize="xl" as="b">
            Total Price
          </Text>
          <Text fontSize="xl" as="b">
            {props.totalPrice || 0.0}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CartSummary;
