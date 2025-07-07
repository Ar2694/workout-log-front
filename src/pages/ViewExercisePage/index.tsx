
import { Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import CircleIcon from '@mui/icons-material/Circle';
import ViewExerciseHandler from "./components/ViewExerciseHandler";
import styles from "./ViewExercisePage.module.css";

export default function ViewExercisePage() {
    return (
        <ViewExerciseHandler className={styles.root}>
            <ViewExerciseContent />
        </ViewExerciseHandler>
    )
}


function ViewExerciseContent({ pageHandler }: any) {
    const { data } = pageHandler;
    const { exercise } = data;
    const { name, bodyPart, equipment, target, secondaryMuscles, instructions } = exercise;

    return (
        <>
            <ResponsiveContainer >
                <Box flexGrow={1}>
                    <Typography color="primary.light" component="h4" variant="h4" textTransform="capitalize"> {name}</Typography>
                </Box>
                <ResponsiveButtonContainer>
                    <Button variant="outlined" text="Back" onClick={pageHandler.handler("onCancel")} />

                </ResponsiveButtonContainer>
            </ResponsiveContainer>
            <Stack spacing={2}>
                <Stack direction="column" spacing={1}>
                    <Typography textTransform="capitalize" fontSize={14}>Equipment:</Typography>
                    <Typography textTransform="capitalize" fontSize={14} fontWeight="bold"> {equipment}</Typography>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <Typography textTransform="capitalize" fontSize={14}>Body Part: </Typography>
                    <Typography textTransform="capitalize" fontSize={14} fontWeight="bold"> {bodyPart}</Typography>
                </Stack>


                <Stack direction="column" spacing={1}>
                    <Typography textTransform="capitalize" fontSize={14}>Primary Muscle:</Typography>
                    <Typography textTransform="capitalize" fontSize={14} fontWeight="bold"> {target}</Typography>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <Typography textTransform="capitalize" fontSize={14}>Secondary Muscles: </Typography>
                    <List dense={true} className="secondary-muscles-list">
                        {secondaryMuscles.map((item: any, key: any) =>
                            <ListItem key={key}>
                                <ListItemIcon className="list-icon">
                                    <CircleIcon />
                                </ListItemIcon>
                                <ListItemText
                                    slotProps={
                                        {
                                            primary: {
                                                textTransform: "capitalize",
                                                fontWeight: "bold"

                                            },

                                        }
                                    }
                                    primary={item}
                                />
                            </ListItem>
                            , [])}
                    </List>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <Typography textTransform="capitalize" fontSize={14}>Instructions:</Typography>
                    <List dense={true} className="instructions-list">
                        {instructions.map((item: any, key: any) =>
                            <ListItem key={key}>
                                <ListItemIcon className="list-icon">
                                    <CircleIcon />
                                </ListItemIcon>
                                <ListItemText
                                    slotProps={
                                        {
                                            primary: {
                                                textTransform: "capitalize",
                                                fontWeight: "bold"

                                            },

                                        }
                                    }
                                    primary={item}
                                />
                            </ListItem>
                            , [])}
                    </List>
                </Stack>
            </Stack>
        </>
    )


}