import {
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

export default function CartPopUp(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.toggle} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <Button
            colorScheme="teal"
            variant="outline"
            mr={3}
            size='sm'
            onClick={props.toggle}
          >
            Close
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            size='sm'
            onClick={props.onConfirm}
          >
            Checkout
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
