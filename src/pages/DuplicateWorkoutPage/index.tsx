import { Alert } from "@mui/material";
import Button from "components/ui/Button";
import WorkoutFormContainer from "components/containers/WorkoutFormContainer"
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import ContentHeaderView from "components/views/ContentHeaderView";
import ShowHideView from "components/views/ShowHideView";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import useForm from "hooks/useForm";
import DuplicateWorkoutHandler from "./component/DuplicateWorkoutHandler";
import { useModal } from "providers/ModalProvider";

export default function DuplicateWorkoutPage() {
    return (
        <DuplicateWorkoutHandler>
            <DuplicateWorkoutContent />
        </DuplicateWorkoutHandler>
    );
}

function DuplicateWorkoutContent(props: any) {
    const { pageHandler } = props;
    const { pageProps } = pageHandler;
    const { workoutCopy } = pageProps;
    const { workoutName } = workoutCopy;
    const form = useForm({ ...workoutCopy, workoutName: `Duplicate: ${workoutName}` });
    const { onOpenModal } = useModal();

    return (
        <>
            <ResponsiveContainer>
                <ContentHeaderView text={`Duplicate`} />
                <ResponsiveButtonContainer >
                    <Button variant="outlined" text="Cancel" onClick={pageHandler.handler("onCancel")} />
                    <Button variant="contained" text="Save"onClick={onOpenModal("SaveWorkoutDialog",{pageHandler, form})} />
                </ResponsiveButtonContainer>
            </ResponsiveContainer>
            <ShowHideView bool={form.hasError}>
                <Alert severity="error">
                    * Please fill out the required field(s).
                </Alert>
            </ShowHideView>
            <WorkoutFormContainer pageHandler={pageHandler} form={form} />

        </>
    )
}
