import { NavLink } from "react-router";
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuIcon from '@mui/icons-material/Menu';


export default function DesktopNav(props: any) {
    const { controls } = props

    return (
 
            <List disablePadding >
                <ListItem disablePadding disableGutters onClick={controls.toggle} >
                    <ListItemButton >
                        <ListItemIcon >
                            <MenuIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <Collapse in={controls.expand} orientation="horizontal" >
                            <ListItemText primary="Home" />
                        </Collapse>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/exercises" end={false}>
                        <ListItemIcon>
                            <FitnessCenterIcon />
                        </ListItemIcon>
                        <Collapse in={controls.expand} orientation="horizontal" >
                            <ListItemText primary="Exercises" />
                        </Collapse>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/workouts" end={false}>
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>
                        <Collapse in={controls.expand} orientation="horizontal" >
                            <ListItemText primary="Workouts" />
                        </Collapse>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/schedules" end={false}>
                        <ListItemIcon>
                            <ScheduleIcon />
                        </ListItemIcon>
                        <Collapse in={controls.expand} orientation="horizontal" >
                            <ListItemText primary="Schedules" />
                        </Collapse>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/calendar" end={false}>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <Collapse in={controls.expand} orientation="horizontal" >
                            <ListItemText primary="Calendar" />
                        </Collapse>
                    </ListItemButton>
                </ListItem>
                {/* <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/profile" end={false}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <Collapse in={controls.expand} orientation="horizontal" >
                            <ListItemText primary="Profile" />
                        </Collapse>
                    </ListItemButton>
                </ListItem> */}
            </List>

    )
}
