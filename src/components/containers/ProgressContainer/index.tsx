import { CircularProgress, Grid } from "@mui/material"

export default function ProgressContainer(props: any) {
    const component = props.component ?? <CircularProgress  size={60}/>

    return (
        <Grid container className="progress-container" direction="column" alignItems="center" padding={8} spacing={9}>
            {component}
        </Grid>
    )
}
