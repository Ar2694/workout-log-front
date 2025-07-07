import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import CalendarView from "components/views/CalendarView";
import AddIcon from '@mui/icons-material/Add';
import Button from "components/ui/Button";
import MobileCalendarView from "components/views/MobileCalendarView";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import CalendarHandler from "./components/CalendarHandler";
import ContentHeaderView from "components/views/ContentHeaderView";

export default function CalendarPage() {
  return (
    <CalendarHandler>
      <CalendarContent />
    </CalendarHandler>
  )
}


function CalendarContent(props: any) {
  const { pageHandler } = props
  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.down("desktop"));
  const calendar = greaterThanSm ? <MobileCalendarView pageHandler={pageHandler} /> : <CalendarView pageHandler={pageHandler} />;

  return (
    <>
      <ResponsiveContainer>
        <ContentHeaderView text="Calendar" />
 
      </ResponsiveContainer>
      <Stack>
        {calendar}
      </Stack>
    </>
  )


}