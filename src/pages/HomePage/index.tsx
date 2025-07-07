
import ResponsiveContainer from "components/containers/ResponsiveContainer";
import ContentHeaderView from "components/views/ContentHeaderView";
import HomeHandler from "./components/HomeHandler";
import { Grid } from "@mui/material";
import HomeNavCard from "./components/HomeNavCard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HomeDateTimeCard from "./components/HomeDateTimeCard";
import dayjs from "dayjs";
import ShowHideView from "components/views/ShowHideView";
import HomeScheduleCard from "./components/HomeScheduleCard";
import PaperContainer from "components/containers/PaperContainter";

export default function HomePage() {
  return (
    <HomeHandler>
      <HomeContent />
    </HomeHandler>
  )
}

function HomeContent(props: any) {
  const { pageHandler } = props;
  const formattedFullHour = parseInt(dayjs().format("HH"));

  return (
    <>
      <ResponsiveContainer justifyContent="space-between" direction="column">
        <ShowHideView bool={formattedFullHour < 12}>
          <ContentHeaderView text="Good morning!" />
        </ShowHideView>
        <ShowHideView bool={formattedFullHour < 18 && formattedFullHour > 12}>
          <ContentHeaderView text="Good afternoon!" />
        </ShowHideView>
        <ShowHideView bool={formattedFullHour < 24 && formattedFullHour > 18}>
          <ContentHeaderView text="Good evening!" />
        </ShowHideView>
      </ResponsiveContainer>
      <Grid className="home-nav-item-container" container direction="row" spacing={4}>
        <PaperContainer className="home-nav-item-container" container variant="outlined" spacing={3} p={2} size={{ desktop: 12, mobile: 12 }}>
          <HomeDateTimeCard />
          <HomeScheduleCard pageHandler={pageHandler} />
        </PaperContainer>
        <HomeNavCard icon={<FitnessCenterIcon className="icon" />} text="Exercises" onClick={pageHandler.handler("onNavigate", "/exercises")} />
        <HomeNavCard icon={<LibraryBooksIcon className="icon" />} text="Workouts" onClick={pageHandler.handler("onNavigate", "/workouts")} />
        <HomeNavCard icon={<ScheduleIcon className="icon" />} text="Schedules" onClick={pageHandler.handler("onNavigate", "/schedules")} />
        <HomeNavCard icon={<CalendarMonthIcon className="icon" />} text="Calendar" onClick={pageHandler.handler("onNavigate", "/calendar")} />
      </Grid>
    </>
  )
}