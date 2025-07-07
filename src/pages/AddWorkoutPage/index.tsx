import { Alert } from "@mui/material";
import Button from "components/ui/Button";
import WorkoutFormContainer from "components/containers/WorkoutFormContainer"
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import ContentHeaderView from "components/views/ContentHeaderView";
import ShowHideView from "components/views/ShowHideView";
import AddWorkoutHandler from "./component/AddWorkoutHandler";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import useForm from "hooks/useForm";

export default function AddWorkoutPage() {
    return (
        <AddWorkoutHandler>
            <AddWorkoutContent />
        </AddWorkoutHandler>
    );
}

function AddWorkoutContent(props: any) {
    const { pageHandler } = props;
    const form = useForm();
    
    return (
        <>
            <ResponsiveContainer>
                <ContentHeaderView text="Add Workout" />
                <ResponsiveButtonContainer >
                    <Button variant="outlined" text="Cancel" onClick={pageHandler.handler("onCancel")} />
                    <Button variant="contained" text="Save" onClick={pageHandler.handler("onSave", form)} />
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
