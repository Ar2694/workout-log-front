
import { MenuItem, Select, SelectProps, styled, useMediaQuery, useTheme } from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import styles from "./WorkoutSortMenu.module.css";



export default function WorkoutSortMenu(props: any) {
    const { page, onChange } = props;
    const theme = useTheme();
    const isDesktopView = useMediaQuery(theme.breakpoints.up("desktop"));

    return (
        <Select classes={styles} renderValue={isDesktopView ? undefined : () => <FilterAltIcon />} IconComponent={isDesktopView ? undefined : "span"} onChange={onChange("sort")} size="small" value={page.selectedSort}  >
            <MenuItem value="workoutName_asc">Workout name (A - Z)</MenuItem>
            <MenuItem value="workoutName_desc">Workout name (Z - A) </MenuItem>
            <MenuItem value="dateCreated_asc">Created Date (Accending)</MenuItem>
            <MenuItem value="dateCreated_desc">Created Date (Descending)</MenuItem>
        </Select>
    )
}
