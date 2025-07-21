

import { Alert } from "@mui/material";
import Button from "components/ui/Button";
import WorkoutFormContainer from "components/containers/WorkoutFormContainer";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import EditWorkoutHandler from "./component/EditWorkoutHandler";
import useForm from "hooks/useForm";
import ShowHideView from "components/views/ShowHideView";
import ContentHeaderView from "components/views/ContentHeaderView";
import { useModal } from "providers/ModalProvider";

export default function EditWorkoutPage() {
    return (
        <EditWorkoutHandler>
            <EditWorkoutContent />
        </EditWorkoutHandler>
    )
}

function EditWorkoutContent(props: any) {
    const {pageHandler} = props;
    const { data } = pageHandler;
    const { workout } = data
    const { onOpenModal } = useModal()
    const form = useForm(workout);
    const { hasError } = form;

    return (
        <>
            <ShowHideView bool={hasError}>
                <Alert severity="error">* Please fill out the required field(s).</Alert>
            </ShowHideView>
            <ResponsiveContainer >
                <ContentHeaderView text="Edit Workout" />
                <ResponsiveButtonContainer>
                    <Button variant="outlined" text="Cancel" onClick={pageHandler.handler("onCancel")} />
                    <Button variant="contained" color="error" text="Delete" onClick={onOpenModal("DeleteWorkoutDialog", { pageHandler, workout })} />
                    <Button variant="contained" text="Save" onClick={onOpenModal("SaveWorkoutDialog",{pageHandler, form})} />
                </ResponsiveButtonContainer>
            </ResponsiveContainer>
            <WorkoutFormContainer pageHandler={pageHandler} form={form} />
        </>
    )

}