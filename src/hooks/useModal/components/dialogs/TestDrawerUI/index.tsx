import { Dialog, Drawer, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import ModalController from "../../shared/ModalController";


export default function TestDrawerUI(props: any) {
    return (
        <ModalController {...props}>
            <TestDrawerUIContent />
        </ModalController>
    )
}


function TestDrawerUIContent({ modal, ...props }: any) {
    const { open, openModal,  onCloseModal } = modal;

    const onOpen = (name: any) => () => {
        openModal(name);
    }

    return (
        <Drawer closeAfterTransition={false} open={open}  >
            <Stack padding={2} spacing={2}>
                <Stack direction="row" alignItems={"center"} p="20px 0">
                    <Typography>{props.message}</Typography>
                </Stack>

                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button color="secondary" variant="outlined" text="Cancel" onClick={onCloseModal} />
                    <Button variant="contained" text={"deleteText"} onClick={onOpen("TestModalUI")} />
                </Stack>
            </Stack>
        </Drawer>
    )
}