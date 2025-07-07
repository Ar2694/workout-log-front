import { Grid, Paper } from "@mui/material";

export default function PaperContainer(props: any) {
    const { p = { desktop: 4, mobile: 2 }, spacing = 8, direction = "column" , ...other} = props;

    return (
        <Grid container component={Paper} direction={direction} p={p} spacing={spacing} {...other}>
            {props.children}
        </Grid>
    )
}
