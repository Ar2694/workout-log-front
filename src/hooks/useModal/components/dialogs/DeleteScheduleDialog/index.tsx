import { Dialog, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import ModalController from "../../shared/ModalController";

export default function DeleteScheduleDialog(props: any) {

    return (
        <ModalController  {...props}>
            <DeleteScheduleDialogContent />
        </ModalController>
    );
}

function DeleteScheduleDialogContent(props: any) {
    const { open, onCloseModal, pageHandler, scheduleId} = props;

    return (
        <Dialog closeAfterTransition={false} className="delete-message-dialog" open={open} maxWidth="desktop" fullWidth >
            <Stack padding={2} spacing={2}>
                <Stack direction="row" alignItems={"center"} p="20px 0">
                    <Typography>Are you sure you want to delete this schedule?</Typography>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button color="secondary" variant="outlined" text="Cancel" onClick={onCloseModal} />
                    <Button variant="contained" color="error" text="Delete" onClick={pageHandler.handler("onDelete", scheduleId)} />
                </Stack>
            </Stack>
        </Dialog>
    )
}