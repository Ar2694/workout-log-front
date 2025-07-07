import { NavLink } from "react-router";
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from "react";


export default function MobileNav(props: any) {
    const { controls } = props

    useEffect(() => {
        controls.close();
    }, [])

    return (
        <Paper className="mobile-nav" component={Collapse} in={controls.expand} orientation="vertical" elevation={1} collapsedSize={45} >
            <List disablePadding >
                <ListItem disablePadding disableGutters onClick={controls.toggle} >
                    <ListItemButton >
                        <ListItemIcon >
                            <MenuIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/"  >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/exercises" end={false}>
                        <ListItemIcon>
                            <FitnessCenterIcon />
                        </ListItemIcon>
                        <ListItemText primary="Exercises" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/workouts" end={false}>
                        <ListItemIcon>
                            <LibraryBooksIcon />
                        </ListItemIcon>
                        <ListItemText primary="Workouts" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/schedules" end={false}>
                        <ListItemIcon>
                            <ScheduleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Schedules" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/calendar" end={false}>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText primary="Calendar" />
                    </ListItemButton>
                </ListItem>
                {/* <ListItem disablePadding disableGutters>
                    <ListItemButton component={NavLink} to="/profile" end={false}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem> */}
            </List>
        </Paper>
    )
}
