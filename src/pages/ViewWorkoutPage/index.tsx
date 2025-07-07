import { Grid, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import EditIcon from '@mui/icons-material/Edit';
import { FormRow } from "components/views/FormView";

import ExceriseView from "components/views/ExceriseView";
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ViewWorkoutHandler from "./component/ViewWorkoutHandler";
import getCreatedDateLabel from "helpers/tools/getCreatedDateLabel";
import ContentHeaderView from "components/views/ContentHeaderView";

export default function ViewWorkoutPage() {
    return (
        <ViewWorkoutHandler className="view-workout-page">
            <ViewWorkoutContent />
        </ViewWorkoutHandler>
    )
}

function ViewWorkoutContent({ pageHandler }: any) {
    const { data } = pageHandler;
    const { workout } = data;
    const { _id, notes, exercises, dateCreated, exerciseCount } = workout;

    return (
        <>
            <ResponsiveContainer justifyContent="space-between">
                <ContentHeaderView text={workout.workoutName} />
                         <ResponsiveButtonContainer>
                <Button color="secondary" variant="outlined" text="Back" onClick={pageHandler.handler("onCancel")} />
                <Button variant="outlined" text="Duplicate" onClick={pageHandler.handler("onDuplicate", workout)} />
                <Button variant="contained" text="Edit Workout" startIcon={<EditIcon />} onClick={pageHandler.handler("onEdit", (_id))} />
            </ResponsiveButtonContainer>
            </ResponsiveContainer>
        
            <Grid container direction="column" spacing={3}>
                {notes &&
                    <FormRow label="Description:">
                        <Typography className="excerise-detail-text">{notes}</Typography>
                    </FormRow>
                }
                <FormRow label="Created Date:">
                    <Typography className="excerise-detail-text">{getCreatedDateLabel(dateCreated)}</Typography>
                </FormRow>
                <FormRow label="Number of Exercises:">
                    <Typography className="excerise-detail-text">{exerciseCount}</Typography>
                </FormRow>
            </Grid>
            <Grid container direction="row" spacing={2}>
                {exercises.map((item: any) => <ExceriseView key={item.id} {...item} {...workout} />)}
            </Grid>
       
        </>
    )
}