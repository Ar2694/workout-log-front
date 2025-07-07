import { Grid, Typography } from "@mui/material";
import ScheduledChip from "components/views/CalendarView/components/ScheduleChip";
import ScheduleCard from "components/views/ScheduleCard";
import React from 'react'

export default function ScheduleItemContainer(props: any) {
    const { groupedDates, pageHandler } = props;
    const scheduleItems = groupedDates.reduce((acc: any, dates: any) => {
        const [date, schedules]: Array<any> = Object.entries(dates)[0];
        const scheduleItems = schedules.reduce((acc: any, item: any,) => {

            // acc.push(<ScheduleCard key={item._id}  />);
            acc.push(<ScheduledChip key={item._id} label={item.workout.workoutName} {...item} onClick={pageHandler.handler("onView", item._id)}/>)
            return acc;
        }, [])

        acc.push(
            <React.Fragment key={date} >
                <Typography color="primary.light" component="h6" variant="h6" textTransform="capitalize">{date}</Typography>
                <Grid container spacing={3} direction="column" flexWrap="wrap">
                    {scheduleItems}
                </Grid>
            </React.Fragment>
        )

        return acc;

    }, [])

    return (
        <Grid container spacing={3} direction="column" size={3}>
            {scheduleItems}
        </Grid>
    )
}
