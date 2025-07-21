import { Dialog, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import ModalController from "../../shared/ModalController";

export default function SaveWorkoutDialog(props: any) {
    return (
        <ModalController {...props} >
            <SaveWorkoutDialogContent />
        </ModalController>
    );
}

function SaveWorkoutDialogContent(props: any) {
    const { open, onCloseModal, pageHandler, form } = props;

    return (
        <Dialog closeAfterTransition={false} className="save-workout-dialog" open={open} maxWidth="desktop" fullWidth >
            <Stack padding={2} spacing={2}>
                <Stack direction="row" alignItems={"center"} p="20px 0">
                    <Typography>Are you sure you want to save your workout?</Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button color="secondary" variant="outlined" text="Cancel" onClick={onCloseModal} />
                    <Button color="primary" variant="contained" text="Save" onClick={pageHandler.handler("onSave", form)} />
                </Stack>
            </Stack>
        </Dialog>
    )
}