import {  Grid,Typography } from "@mui/material";
import styles from "./HomeScheduleCard.module.css";
import dayjs from "dayjs";
import ShowHideView from "components/views/ShowHideView";
import { HomeScheduledChip } from "./components/HomeScheduledChip";

export default function HomeScheduleCard(props: any) {
  const { pageHandler } = props;
  const { data } = pageHandler
  const { schedules } = data;
  const todaySchedules = schedules.filter((item: any) => dayjs(item.date).format("MDYYY") === dayjs().format("MDYYY"), []);
  const hasSchedules = todaySchedules.length > 0;
  const scheduleItems = todaySchedules.map((item: any) => <HomeScheduledChip key={item._id} label={item.workout.workoutName} color={item.color} onClick={pageHandler.handler("onNavigate", `/schedules/view/${item._id}`)} />, []);

  return (
    <Grid className={`home-schedule-card ${styles.root}`} container direction="column" spacing={1} >
      <ShowHideView bool={!hasSchedules}>
        <Typography color="primary" fontSize={24}>No schedules</Typography>
      </ShowHideView>
      <ShowHideView bool={hasSchedules}>
        <Typography color="primary" fontSize={24}>Today schedule:</Typography>
        <Grid className="schedules-items-container" container direction="row" spacing={2}>
          {scheduleItems}
        </Grid>
      </ShowHideView>
    </Grid>
  )
}






