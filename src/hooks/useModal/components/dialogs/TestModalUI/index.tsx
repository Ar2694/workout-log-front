import { Dialog, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import ModalController from "../../shared/ModalController";


export default function TestModalUI(props: any) {
    return (
        <ModalController {...props}>
            <TestModalUIContent />
        </ModalController>

    )
}

function TestModalUIContent({ modal, ...props }: any) {
    const { open, onOpenModal, onClose, onCloseModal } = modal;

    console.log(modal, "TestModalUIContent")
    return (
        <Dialog closeAfterTransition={false} className="delete-message-dialog" open={open} maxWidth="desktop" fullWidth >
            <Stack padding={2} spacing={2}>
                <Stack direction="row" alignItems={"center"} p="20px 0">
                    <Typography>{props.message}</Typography>
                </Stack>

                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button color="secondary" variant="outlined" text="Cancel" onClick={onCloseModal} />
                    <Button variant="contained" text={"deleteText"} onClick={onOpenModal("TestModalUI")} />
                </Stack>
            </Stack>
        </Dialog>
    )
}