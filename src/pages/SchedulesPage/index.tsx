
import { Box, Stack, Typography } from "@mui/material";
import Button from "components/ui/Button";
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import DeleteIcon from '@mui/icons-material/Delete';
import SchedulesHandler from "./components/SchedulesHandler";
import { groupByDates } from "helpers";
import ScheduleItemContainer from "./components/ScheduleItemContainer";
import { useModal } from "providers/ModalProvider";
import ShowHideView from "components/views/ShowHideView";
import ContentHeaderView from "components/views/ContentHeaderView";

export default function SchedulesPage() {
  return (
    <SchedulesHandler className="schedules-page">
      <SchedulesPageContent />
    </SchedulesHandler>
  )
}


function SchedulesPageContent({ pageHandler }: any) {
  const { data, page, onPageChange } = pageHandler;
  const { filteredData } = page;
  const { schedules } = data;
  const { schedules: filteredSchedules } = filteredData ?? {}
  const schedulesDate = filteredSchedules ? filteredSchedules : schedules;
  const groupedDates = groupByDates(schedulesDate);
  const { onOpenModal } = useModal();

  return (
    <>
      <ResponsiveContainer>
        <ContentHeaderView text="Schedules" />
        <ResponsiveButtonContainer>
          <ShowHideView bool={groupedDates.length > 0}>
            <Button text="Clear All Schedules" color="error" startIcon={<DeleteIcon className="add-box-icon pointer" fontSize="large" />} onClick={onOpenModal("DeleteAllSchedulesDialog", { pageHandler })} />
          </ShowHideView>
          <Button text="Add Schedule" variant="contained" startIcon={<AddIcon className="add-box-icon pointer" fontSize="large" />} onClick={pageHandler.handler("onAddSchedule")} />

        </ResponsiveButtonContainer>
      </ResponsiveContainer>
      <ShowHideView bool={groupedDates.length > 0}>
        <ScheduleItemContainer groupedDates={groupedDates} pageHandler={pageHandler} />
      </ShowHideView>
      <ShowHideView bool={!(groupedDates.length > 0)}>
        <Grid container justifyContent="center">
          <Typography textAlign="center">No Workouts Scheduled</Typography>
        </Grid>
      </ShowHideView>
    </>
  )
}