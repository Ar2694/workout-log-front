
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar, DateCalendarProps } from '@mui/x-date-pickers/DateCalendar';
import { styled } from "@mui/material";
import dayjs, { Dayjs, } from "dayjs";

import { useState } from "react";
import MobileDay from "./components/MobileDay";



const StyledCalendar = styled(DateCalendar)<DateCalendarProps<Dayjs>>(({ theme }) => ({
  width: "100%",
  maxHeight: "initial",
  minHeight: "initial",
  height: "initial",
  boxShadow: "none",
  border: `1px solid ${ theme.palette.divider}`,
  background: "#FFF",

  "& .day": {
    width: "100%"
  },
  "& .MuiPickersSlideTransition-root": {
    minHeight: "unset",
    display: "block",
    position: "relative",
    overflowX: "hidden",
  },
  "& .MuiDayCalendar-monthContainer ":{
    position: "relative",

    
  },
  "& .MuiDayCalendar-weekContainer": {
    margin: 0,
    flexDirection:"column",
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
  display:"none"
  },
  "& .MuiDayCalendar-header ":{
    color: theme.palette.primary.main,
    background: theme.palette.grey[50],

  },
}));
export default function MobileCalendarView(props:any) {
    const {pageHandler} = props;

  const [month, setMonth] = useState(dayjs().format("MMM")) 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledCalendar
        
        autoFocus={false}
          onMonthChange={(day:any) => setMonth(day.format("MMM"))}
        slots={{
          day: (props: any) => { return <MobileDay {...props} month={month} pageHandler={pageHandler} />},
          
        }}
        views={["year", 'month', 'day',]}
      />
    </LocalizationProvider>
  )
}


