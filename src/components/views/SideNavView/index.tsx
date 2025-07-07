import { Grid,useMediaQuery, useTheme } from "@mui/material";
import styles from "./SideNavView.module.css";
import ShowHideView from "../ShowHideView";
import { useState } from "react";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

export default function SideNavView() {
    const theme = useTheme();
    const greaterThanMd = useMediaQuery(theme.breakpoints.up("desktop"));

    let isOpen = greaterThanMd;

    if (localStorage.getItem('isExpanded') === null) {
        localStorage.setItem('isExpanded', greaterThanMd ? "true" : "false");
    } else {
        isOpen = localStorage.getItem('isExpanded') === "true" ? true : false
    }

    const [state, setState] = useState(isOpen);

    const close = () => {
        setState(false);
        localStorage.setItem('isExpanded', "false");
    }
    const open = () => {
        setState(true);
        localStorage.setItem('isExpanded', "true");
    }
    const toggle = () => {
        setState(!state);
        localStorage.setItem('isExpanded', !state ? "true" : "false");
    }
    const controls = {
        close,
        open,
        toggle,
        expand: state
    }
    return (
        <ShowHideView bool={true}>
            <Grid className={`side-nav-view ${controls.expand ? "expanded" : ""} ${styles.root}`} width={controls.expand ? "190px" : "78px"} >
                <Grid container direction="column" className={`side-nav-view-content`}  >
                    <ShowHideView bool={greaterThanMd}>
                        <DesktopNav controls={controls} />
                    </ShowHideView>
                    <ShowHideView bool={!greaterThanMd}>
                        <MobileNav controls={controls} />
                    </ShowHideView>
                </Grid>
            </Grid>
        </ShowHideView>
    )
}
