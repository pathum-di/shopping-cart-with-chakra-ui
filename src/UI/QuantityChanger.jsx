import { Tooltip, IconButton, ButtonGroup, Button } from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';

export default function QuantityChanger(props) {
  const { currentQuantity, onIncrement, onDecrement, productId, maxQuantity } =
    props;
  return (
    <ButtonGroup size="sm" isAttached variant="outline" mx={2}>
      <Tooltip hasArrow label="Decrease Quantity" placement="top">
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Reduce Quantity"
          size="sm"
          icon={<MinusIcon />}
          onClick={e => onDecrement(productId)}
          isDisabled={currentQuantity === 1}
        />
      </Tooltip>
      <Tooltip hasArrow label="Current Quantity" placement="top">
        <Button
          isDisabled
          colorScheme="teal"
          aria-label="Current Quantity"
          size="sm"
        >
          {currentQuantity || 0}
        </Button>
      </Tooltip>
      <Tooltip hasArrow label="Increase Quantity" placement="top">
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Increase Quantity"
          size="sm"
          icon={<AddIcon />}
          onClick={e => onIncrement(productId)}
          isDisabled={currentQuantity === maxQuantity}
        />
      </Tooltip>
    </ButtonGroup>
  );
}
