import { Dialog, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import ModalController from "../../shared/ModalController";

export default function EditWorkoutDialog(props: any) {
    return (
        <ModalController {...props} >
            <EditWorkoutDialogContent />
        </ModalController>
    );
}

function EditWorkoutDialogContent(props: any) {
    const { open, onClose, onCloseModal,pageHandler, form } = props;

    const handleUpdate = () => {
        pageHandler.handler("onSave", form)();
        onClose();
    };  

    return (
        <Dialog closeAfterTransition={false} className="edit-workout-dialog" open={open} maxWidth="desktop" fullWidth >
            <Stack padding={2} spacing={2}>
                <Stack direction="row" alignItems={"center"} p="20px 0">
                    <Typography>Are you sure you want to update your workout?</Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button color="secondary" variant="outlined" text="Cancel" onClick={onCloseModal} />
                    <Button color="primary" variant="contained" text="Update" onClick={handleUpdate} />
                </Stack>
            </Stack>
        </Dialog>
    )
}