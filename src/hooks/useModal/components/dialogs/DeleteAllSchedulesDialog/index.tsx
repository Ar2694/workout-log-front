import { Dialog, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import ModalController from "../../shared/ModalController";

export default function DeleteAllSchedulesDialog(props: any) {

    return (
        <ModalController  {...props}>
            <DeleteAllSchedulesDialogContent />
        </ModalController>
    );
}

function DeleteAllSchedulesDialogContent(props: any) {
    const { open, onClose, onCloseModal, pageHandler, form  } = props;


    const onDelete = () => {
        pageHandler.handler("onDeleteAllSchedules")();
        onClose();
    }

    return (
        <Dialog closeAfterTransition={false} className="delete-message-dialog" open={open} maxWidth="desktop" fullWidth >
            <Stack padding={2} spacing={2}>
                <Stack direction="row" alignItems={"center"} p="20px 0">
                    <Typography>Are you sure you want to clear all your scheduled workouts?</Typography>
                </Stack>

                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button color="secondary" variant="outlined" text="Cancel" onClick={onCloseModal} />
                    <Button variant="contained" color="error" text="Delete" onClick={onDelete} />
                </Stack>
            </Stack>
        </Dialog>
    )
}