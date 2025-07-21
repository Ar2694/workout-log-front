import { Card, CardActionArea, Paper, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Header from "../WorkoutCard/components/Header";
import styles from "./ExerciseInfoCard.module.css";

export default function ExerciseInfoCard(props: any) {
    const { _id, name, bodyPart, pageHandler } = props

    return (

        <Grid container className={styles.root} size={{ mobile: 12, desktop: 2 }} component={Paper} square={true} elevation={4} onClick={pageHandler.handler("onView", _id)} >
            <Header {...props} />
            <Stack direction="column" spacing={.6}>
                <Typography textTransform="capitalize" fontSize={18} fontWeight="bold" >{name}</Typography>
                <Stack direction="row" spacing={1}>
                    <Typography textTransform="capitalize" fontSize={14}>Body Part: </Typography>
                    <Typography textTransform="capitalize" fontSize={14} fontWeight="bold"> {bodyPart}</Typography>
                </Stack>

            </Stack>
        </Grid>

    )
}




