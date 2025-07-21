import { Card, CardActionArea, darken, getContrastRatio, Grid, Paper, Stack, Typography, useTheme } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import getCreatedDateLabel from "helpers/tools/getCreatedDateLabel";
import styles from "./WorkoutCard.module.css";

export default function WorkoutCard({ pageHandler, ...props }: any) {
    const { palette } = useTheme()
    const { _id, dateCreated, workoutName, color = "" } = props
    const colorBg = color === "" ? palette.primary.contrastText : color;
    const sx = {
        background: `linear-gradient(to  top left , ${darken(colorBg, 0.3)}, ${colorBg})`,
        color: getContrastRatio(colorBg, "#fff") > 2 ? "#fff" : "#000",
        fill: getContrastRatio(colorBg, "#fff") > 2 ? "#fff" : "#000",
        "&:hover": {
            background: `linear-gradient(to  top left , ${darken(colorBg, 0.1)}, ${colorBg})`
        }
    }

    return (
        <Grid container className={`${styles.root}`} size={{ mobile: 12, desktop: 3 }} >
            <Grid container direction="column" justifyContent="space-between" component={Paper} className="workout-card" square={true} elevation={7} onClick={pageHandler.handler("onView", _id)} sx={sx} >
                <Grid container direction="row"  width={"100%"} >
                    <Typography className="title" noWrap>{workoutName}</Typography>
                </Grid>

                <Grid container direction="row" spacing={.6}>
                    <CalendarMonthIcon className="calendar-icon" />
                    <Typography fontSize={12}>
                        {getCreatedDateLabel(dateCreated)}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}