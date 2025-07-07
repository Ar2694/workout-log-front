import { Grid } from "@mui/material";
import SearchField from "components/ui/SearchField";

export default function SearchContainer(props: any) {
    const { page, onChange } = props;

    return (
        <Grid container className="search-container" direction={"row" } alignItems="center">
            <Grid size={{desktop: 3, mobile:false}} flex={{desktop: "none", mobile:1}}>
                <SearchField value={page.search} placeholder={props.placeholder} onChange={onChange("search")} />
            </Grid>
            <Grid container size={{desktop: 3, mobile:false}}>
                {props.sortMenu}
            </Grid>
        </Grid>
    )
}
