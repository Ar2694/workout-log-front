import { Box, Grid, Paper, Stack, Typography } from "@mui/material"
import FormView, { FormRow } from "components/views/FormView"
import styles from "./EverciseView.module.css";

export default function ExceriseView(props: any) {
    const { bodyPart, exercise, numSets, sets, color, id } = props;
    const exerciseNumber = "#"+ (id + 1);
    const sx = {
        "&:before": {
            borderColor: color
        }
    }

    return (
        <Grid sx={sx} className={`${styles.root}`} component={Paper} variant="outlined" container direction="column" size={12} spacing={2}>
            <Stack alignItems="flex-end" direction="row">
                <Box flexGrow={1}>
                    <Typography color="primary" className="excerise-detail-text" fontSize={18} fontWeight={600}>{exerciseNumber} - {exercise}</Typography>
                </Box>
            </Stack>
            {bodyPart &&
                <FormView container direction="row" spacing={2}>
                    <FormRow label="Body Part:">
                        <Typography className="excerise-detail-text">{bodyPart}</Typography>
                    </FormRow>
                </FormView>
            }
            {numSets &&
                <FormView spacing={2}>
                    {sets.map((item: any, key: any) =>
                        <FormRow key={key} label={`Set ${item.id + 1}:`} spacing={2} direction="row" alignItems="center">
                            <Typography className="excerise-detail-text reps-text" textTransform="initial">{item.reps} reps</Typography>

                        </FormRow>
                    )}
                </FormView>
            }
        </Grid>
    )
}