import { AlertDialog, Button, Center } from "native-base";
import { useState, useRef } from "react";

const ButtonAlertDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    const cancelRef = useRef(null);
    return (
        <Center>
            <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
                Delete Customer
            </Button>
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Delete Customer</AlertDialog.Header>
                    <AlertDialog.Body>
                        This will remove all data relating to Alex. This action cannot be reversed. Deleted data can not be recovered.
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button.Group space={2}>
                            <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                                Cancel
                            </Button>
                            <Button colorScheme="danger" onPress={onClose}>
                                Delete
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </Center>
    );
};

export default ButtonAlertDialog;
