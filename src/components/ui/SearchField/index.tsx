import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchField.module.css";

export default function SearchField(props: any) {
  return (
    <TextField classes={styles} value={props.value} size="small" slotProps={{ input: { startAdornment: <SearchIcon color="primary" /> } }} placeholder={props.placeholder} onChange={props.onChange} fullWidth />
  )
}
