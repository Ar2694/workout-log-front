
import { Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import EditIcon from '@mui/icons-material/Edit';
import { FormRow } from "components/views/FormView";
import Grid from '@mui/material/Grid';
import ExceriseView from "components/views/ExceriseView";
import dayjs from "dayjs";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import ViewScheduleHandler from "./components/ViewScheduleHandler";
import ShowHideView from "components/views/ShowHideView";
import ContentHeaderView from "components/views/ContentHeaderView";

export default function ViewSchedulePage() {
    return (
        <ViewScheduleHandler className="view-schedule-page">
            <ViewScheduleContent />
        </ViewScheduleHandler>
    )
}

function ViewScheduleContent(props: any) {
    const { pageHandler } = props;
    const { data } = pageHandler;
    const { schedule } = data;
    const { _id, date } = schedule;
    const workout = schedule.workout;

    return (
        <>
            <ResponsiveContainer justifyContent="space-between">
                <ContentHeaderView text={`${dayjs(date).format("MMMM DD, YYYY")}`} />
                <ResponsiveButtonContainer >
                    <Button variant="outlined" text="Back" onClick={pageHandler.handler("onCancel")} />
                    <Button variant="contained" text="Edit Workout" startIcon={<FitnessCenterIcon />} onClick={pageHandler.handler("onViewWorkout", workout._id)} />
                    <Button variant="contained" text="Edit Schedule" startIcon={<EditIcon />} onClick={pageHandler.handler("onEditSchedule", _id)} />
                </ResponsiveButtonContainer>
            </ResponsiveContainer>
            <Stack spacing={2}>
                <FormRow label="Workout:">
                    <Typography className="excerise-detail-text">{workout.workoutName}</Typography>
                </FormRow>
                <ShowHideView bool={workout.notes}>
                    <FormRow label="Notes:">
                        <Typography className="excerise-detail-text">{workout.notes}</Typography>
                    </FormRow>
                </ShowHideView>
                <FormRow label="Number of Exercises:">
                    <Typography className="excerise-detail-text">{workout.exerciseCount}</Typography>
                </FormRow>
            </Stack>
            <Grid container direction="row" spacing={2}>
                {workout.exercises.map((item: any, key: any) => <ExceriseView key={key} {...item} color={schedule.color} />)}
            </Grid>
        </>
    )
}