import { Card, CardActionArea, darken, getContrastRatio, Stack, styled, Typography, useTheme } from "@mui/material";
import Header from "./components/Header";
import Grid from '@mui/material/Grid';
import ShowHideView from "../ShowHideView";

const StyledGrid = styled(Grid)<any>(({ theme }) => ({

    height: "max-content",
    whiteSpace: "nowrap",
    "& .workout-card": {
        padding: "15px",
        borderRadius: "5px"
    },
    "& .card-button:hover .MuiCardActionArea-focusHighlight": {
        opacity: "0.1",
    },
    "& .schedule-icon": {

        width: "23px",
        height: "23px"
    },
}));


export default function ScheduleCard(props: any) {
    const { palette } = useTheme()
    const { _id, workout, color, pageHandler } = props
    const colorBg = color === "" ? palette.primary.contrastText : color;

    const sx = {
        background: `linear-gradient(to  top left , ${darken(colorBg, 0.3)}, ${colorBg})`,
        color: getContrastRatio(colorBg, "#fff") > 2 ? "#fff" : "#000",
        fill: getContrastRatio(colorBg, "#fff") > 2 ? "#fff" : "#000",

    }

    return (
        <StyledGrid size={{ mobile: 12, desktop: 4 }} >
            <CardActionArea className="card-button">
                <Card className="workout-card" square={false} elevation={4} onClick={pageHandler.handler("onView", _id)} sx={sx} >
                    <Stack spacing={.6}>
                        <Header workoutName={workout.workoutName} />
                        <ShowHideView bool={workout.notes !== ""}>
                            <Typography fontSize={12}>
                                {workout.notes}
                            </Typography>
                        </ShowHideView>
                    </Stack>
                </Card>
            </CardActionArea>
        </StyledGrid>
    )
}



