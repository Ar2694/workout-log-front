
import { MenuItem, Select, SelectProps, styled, useMediaQuery, useTheme } from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import styles from "./ExercisesSortMenu.module.css";




export default function ExercisesSortMenu(props: any) {
    const { page, onChange } = props;
    const theme = useTheme();
    const isDesktopView = useMediaQuery(theme.breakpoints.up("desktop"));
    return (
        <Select classes={styles} renderValue={isDesktopView ? undefined : () => <FilterAltIcon color="primary" />} IconComponent={isDesktopView ? undefined : "span"} onChange={onChange("sort")} size="small" value={page.selectedSort}  >
            <MenuItem value="name_asc">Sort by Name (A - Z)</MenuItem>
            <MenuItem value="name_desc">Sort by Name (Z - A) </MenuItem>
            {/* <MenuItem value="dateCreated_asc">Sort by Created Date (Accending)</MenuItem>
            <MenuItem value="dateCreated_desc">Sort by Created Date (Descending)</MenuItem> */}
        </Select>
    )
}
