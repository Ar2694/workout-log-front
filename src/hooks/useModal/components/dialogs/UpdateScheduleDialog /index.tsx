import { Dialog, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import ModalController from "../../shared/ModalController";

export default function UpdateScheduleDialog(props: any) {
    return (
        <ModalController {...props} >
            <UpdateScheduleDialogContent />
        </ModalController>
    );
}

function UpdateScheduleDialogContent({ modal, ...props }: any) {
    console.log(modal)
    const { open, onClose, onCloseModal, data } = modal;
    const { pageHandler, form } = data;

    return (
        <Dialog closeAfterTransition={false} className="delete-message-dialog" open={open} maxWidth="desktop" fullWidth >
            <Stack padding={2} spacing={2}>
                <Stack direction="row" alignItems={"center"} p="20px 0">
                    <Typography>Are you sure you want to update your schedule?</Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button color="secondary" variant="outlined" text="Cancel" onClick={onCloseModal} />
                    <Button color="primary" variant="contained" text="Yes" onClick={pageHandler.handler("onUpdate", {form, onClose})} />

                </Stack>
            </Stack>
        </Dialog>
    )
}