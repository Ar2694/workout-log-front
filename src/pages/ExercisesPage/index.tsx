import { Grid, Typography } from "@mui/material";
import SearchContainer from "components/containers/SearchContainer";
import PaginationBase from "components/ui/PaginationBase";
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ExercisesSortMenu from "components/ui/ExercisesSortMenu ";
import ExerciseInfoCard from "components/views/ExerciseInfoCard";
import ExercisesHandler from "./components/ExercisesHandler";
import ContentHeaderView from "components/views/ContentHeaderView";
import ShowHideView from "components/views/ShowHideView";

export default function ExercisesPage() {
  return (
    <ExercisesHandler>
      <ExercisesContent />
    </ExercisesHandler>
  )
}


function ExercisesContent({ pageHandler }: any) {
  const { data, page, onPageChange } = pageHandler;
  const { filteredData } = page;
  const { exercises } = data;
  const { exercises: filteredWorkouts } = filteredData
  const exercisesData = filteredWorkouts ? filteredWorkouts : exercises;

  const exercisesItems = exercisesData.map((item: any, key: any) => <ExerciseInfoCard key={key} {...item} pageHandler={pageHandler} />, []);

  return (
    <>
      <ResponsiveContainer>
        <ContentHeaderView text="Exercises" />
      </ResponsiveContainer>
      <SearchContainer
        placeholder="Search"
        page={page}
        onChange={onPageChange}
        sortMenu={<ExercisesSortMenu
          page={page}
          onChange={onPageChange}
        />} />
      <ShowHideView bool={exercisesItems.length > 0}>
        <Grid container direction="column" spacing={4} >
          <Grid container spacing={3} display={{ desktop: "none", mobile: "flex" }}>
            <PaginationBase
              page={page}
              onChange={onPageChange}
            />
          </Grid>
          <Grid container className="exercises-container" spacing={3} direction="row">
            {exercisesItems}
          </Grid>
          <Grid container spacing={3}>
            <PaginationBase
              page={page}
              onChange={onPageChange}
            />
          </Grid>
        </Grid>
      </ShowHideView>

      <ShowHideView bool={!(exercisesItems.length > 0)}>
        <Grid container justifyContent="center">
          <Typography textAlign="center">No Results</Typography>
        </Grid>

      </ShowHideView>
    </>
  )

}