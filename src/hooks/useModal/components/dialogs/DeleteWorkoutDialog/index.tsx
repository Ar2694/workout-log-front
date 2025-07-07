import { Dialog, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import ModalController from "../../shared/ModalController";

export default function DeleteWorkoutDialog(props: any) {
    return (
        <ModalController {...props} >
            <DeleteWorkoutDialogContent />
        </ModalController>
    );
}

function DeleteWorkoutDialogContent(props: any) {
    const { open, onClose, pageHandler, workout  } = props;
    
    return (
        <Dialog closeAfterTransition={false} className="delete-message-dialog" open={open} maxWidth="desktop" fullWidth >
            <Stack padding={2} spacing={2}>
                <Stack direction="row" alignItems={"center"} p="20px 0">
                    <Typography>Are you sure you want to delete this workout?</Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button color="secondary" variant="outlined" text="Cancel" onClick={onClose} />
                    <Button variant="contained" text="Delete" onClick={pageHandler.handler("onDelete", workout._id)} />
                </Stack>
            </Stack>
        </Dialog>
    )
}