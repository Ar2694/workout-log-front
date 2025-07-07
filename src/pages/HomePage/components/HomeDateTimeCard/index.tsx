import { Grid, Typography } from "@mui/material";
import PaperContainer from "components/containers/PaperContainter";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import styles from "./HomeDateTimeCard.module.css";

export default function HomeDateTimeCard(props: any) {
    const [time, setTime] = useState(dayjs());
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const formattedDate = time.format("MMM D, YYYY");
    const formattedDay = weekdays[time.day()];
    const formattedTime = time.format("h:mm:ss a");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(dayjs());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (

        <Grid className={`home-date-time-card ${styles.root}`} container direction="column" spacing={0}>
            <Typography color="primary" fontSize={24}>{formattedDay}</Typography>
            <Typography color="primary" fontSize={32}>{formattedTime}</Typography>
            <Typography color="primary">{formattedDate}</Typography>
        </Grid>


    )
}
