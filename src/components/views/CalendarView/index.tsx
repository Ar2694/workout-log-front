
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, DateCalendarProps } from '@mui/x-date-pickers/DateCalendar';
import { styled } from "@mui/material";
import dayjs, { Dayjs, } from "dayjs";
import Day from "components/views/CalendarView/components/Day"
import { useState } from "react";


const StyledCalendar = styled(DateCalendar)<DateCalendarProps<Dayjs>>(({ theme }) => ({
  width: "100%",
  maxHeight: "initial",
  minHeight: "initial",
  height: "100%",
  boxShadow: "none",
  border: `1px solid ${ theme.palette.divider}`,
  borderBottom:"none",
  background: "#FFF",
  "& .day": {
    width: "100%"
  },
  "& .MuiPickersSlideTransition-root": {
    minHeight: "700px"
  },
  "& .MuiDayCalendar-weekContainer": {
    margin: 0
  },
  "& .MuiDayCalendar-weekDayLabel": {
    width: "100%",
    fontSize: "18px",
    fontWeight:600,
    color: "#000"
  },
  "& .MuiMonthCalendar-root": {
    boxShadow: "none"
  },
  "& .MuiYearCalendar-root": {
    width: "100%",
  },
  "& .MuiDayCalendar-header":{
    borderBottom: `1px solid ${ theme.palette.grey[200]}`,
    borderTop: `1px solid ${ theme.palette.grey[200]}`,
    color: theme.palette.primary.main,
    background: theme.palette.grey[50],
  },
  "& .MuiDayCalendar-monthContainer":{
    height: "100%"
  }

}));
export default function CalendarView(props:any) {
  const {pageHandler} = props;
  const [month, setMonth] = useState(dayjs().format("MMM")) 
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledCalendar
        dayOfWeekFormatter={(date: Dayjs) => date.format('ddd')}
        showDaysOutsideCurrentMonth={false}
        autoFocus={false}
          onMonthChange={(day:any) => setMonth(day.format("MMM"))}
        slots={{
          day: (props: any) => { return <Day {...props} month={month} pageHandler={pageHandler} />}
        }}
        views={["year", 'month', 'day',]}
      />
    </LocalizationProvider>
  )
}


