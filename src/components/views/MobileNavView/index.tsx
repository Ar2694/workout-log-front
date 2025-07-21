import { AppBar, AppBarProps, Box, Collapse, IconButton, Paper, Stack, styled, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { NavLink } from "react-router";
import Button from "components/ui/Button";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";

import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useState } from "react";
import ShowHideView from "../ShowHideView";
import styles from "./MobileNavView.module.css";



export default function MobileNavView() {
    const [state, setState] = useState(false);
    const controls = {
        close: () => setState(false),
        open: () => setState(true),
        toggle: () => setState(!state),
        expand: state
    }

    const theme = useTheme();
    const showMenu = useMediaQuery(theme.breakpoints.down("desktop"));


    return (
        <ShowHideView bool={showMenu}>


            <AppBar position="fixed" classes={styles} component={Paper} variant="outlined" square>
                <Toolbar variant="dense">
                    <IconButton
                        className="icon-button"
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={controls.toggle}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
                <Collapse in={controls.expand} timeout="auto" unmountOnExit>
                    <Stack justifyContent="flex-start">
                        <Button component={NavLink} to="/" end={false} className="nav-item" text="Home" startIcon={<HomeIcon />} />
                        <Button component={NavLink} to="/exercises" end={false} className="nav-item" text="Exercises" startIcon={<FitnessCenterIcon />} />
                        <Button component={NavLink} to="/workouts" end={false} className="nav-item" text="Workouts" startIcon={<LibraryBooksIcon />} />
                        <Button component={NavLink} to="/schedules" end={false} className="nav-item" text="Schedules" startIcon={<ScheduleIcon />} />
                        <Button component={NavLink} to="/calendar" end={false} className="nav-item" text="Calendar" startIcon={<CalendarMonthIcon />} />
                        <Button component={NavLink} to="/profile" end={false} className="nav-item" text="Profile" startIcon={<PersonIcon />} />
                    </Stack>
                </Collapse>
            </AppBar>


        </ShowHideView>
    )
}

