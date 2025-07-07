import { Box, Stack, Typography } from "@mui/material";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import ScheduledChip from "../ScheduleChip";
import styles from "./Day.module.css";
dayjs.extend(isSameOrAfter)

interface CustomDayProps extends PickersDayProps<Dayjs> {
  children?: React.ReactNode;
  month?: any,
  pageHandler?: any
}

export default function Day(props: CustomDayProps) {
  const { day, today, month, pageHandler } = props;
  const { data } = pageHandler;
  const { schedules } = data
  const isOutSideMonth = day.format("MMM").toLowerCase() !== month.toLowerCase() ? true : false;
  const dayName = day.format("dddd").toLowerCase();
  const chipItem = schedules.reduce((acc: any, item: any, key: any) => {
    const scheduleDate = dayjs(item.date);

    if (scheduleDate.isSame(day.format(), "day")) {
      acc.push(<ScheduledChip key={key} label={item.workout.workoutName} color={item.color} onClick={pageHandler.handler("onScheduleView", item._id)} />)
    }
    return acc;
  }, []);

  return (
    <PickersDay
      classes={styles}
      autoFocus={false}
      className={isOutSideMonth ? `outside-month ${dayName}` : `${dayName}`}
      isAnimating={false}
      today={today}
      onDaySelect={() => undefined}
      disableTouchRipple
      disableRipple
      tabIndex={undefined}
      disableMargin
      key={day.toString()}
      day={day}
      isFirstVisibleCell={true}
      isLastVisibleCell={false} outsideCurrentMonth={false} showDaysOutsideCurrentMonth={true}     >
      <Stack direction="column" alignItems="flex-start" width="100%">
        <Stack className="date-container" direction="row" width="100%" alignItems="center" justifyItems="flex-start">
          <Box flexGrow={1} textAlign="left">
            <Typography component="span" fontWeight={600} fontSize={18}>{day.date()}</Typography>
          </Box>
        </Stack>
        <Box component={Stack} className="chip-container" width="inherit" spacing={1}>
          {chipItem}
        </Box>
      </Stack>
    </PickersDay>
  );
}