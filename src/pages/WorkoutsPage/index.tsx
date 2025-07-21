import { Box, Stack, Typography } from "@mui/material";
import SearchContainer from "components/containers/SearchContainer";
import Button from "components/ui/Button";
import PaginationBase from "components/ui/PaginationBase";
import WorkoutSortMenu from "components/ui/WorkoutSortMenu";
import AddIcon from '@mui/icons-material/Add';
import WorkoutCard from "components/views/WorkoutCard";
import Grid from '@mui/material/Grid';
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ResponsiveButtonContainer from "components/containers/ResponsiveButtonContainer ";
import WorkoutsHandler from "./component/WorkoutsHandler";
import ShowHideView from "components/views/ShowHideView";
import ContentHeaderView from "components/views/ContentHeaderView";

export default function WorkoutsPage() {
  return (
    <WorkoutsHandler>
      <WorkoutsContent />
    </WorkoutsHandler>
  )
}

function WorkoutsContent({ pageHandler }: any) {
  const { data, page, onPageChange } = pageHandler;
  const { filteredData } = page;
  const { workouts } = data;
  const { workouts: filteredWorkouts } = filteredData
  const workoutItems = filteredWorkouts ? filteredWorkouts : workouts;


  return (
    <>
      <ResponsiveContainer>
        <ContentHeaderView text="Workouts" />
        <ResponsiveButtonContainer>
          <Button text="Add Workout" variant="contained" startIcon={<AddIcon className="add-box-icon pointer" fontSize="large" />} onClick={pageHandler.handler("onAdd")} />
        </ResponsiveButtonContainer>
      </ResponsiveContainer>
      <Grid className="workouts-container" container direction="column" spacing={5}>

        <SearchContainer
          placeholder="Search"
          page={page}
          onChange={onPageChange}
          sortMenu={
            <WorkoutSortMenu
              page={page}
              onChange={onPageChange} />
          } />

        <ShowHideView bool={workoutItems.length > 0}>
          {/* <Grid container spacing={3} display={{ desktop: "none", mobile: "flex" }}>
            <PaginationBase
              page={page}
              onChange={onPageChange}
            />
          </Grid> */}
          <Grid container spacing={3} direction="row" flexWrap="wrap">
            {workoutItems.map((item: any, key: any) => <WorkoutCard key={key} {...item} pageHandler={pageHandler} />, [])}
          </Grid >
          {/* <Grid container spacing={3} >
            <PaginationBase
              page={page}
              onChange={onPageChange}
            />
          </Grid> */}
        </ShowHideView>

        <ShowHideView bool={workoutItems !== undefined && workoutItems.length === 0}>
          <Stack justifyContent="center">
            <Typography textAlign="center">No Results</Typography>
          </Stack>
        </ShowHideView>
      </Grid>
    </>
  )
}