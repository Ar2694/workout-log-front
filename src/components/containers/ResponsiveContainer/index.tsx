import { Grid } from "@mui/material"

export default function ResponsiveContainer(props: any) {
    const {
        spacing = { mobile: 3, desktop: 2},
        direction = { mobile: "column", desktop: "row"},
        ...other
    } = props

    return (
        <Grid container spacing={spacing} direction={direction} {...other} >
            {props.children}
        </Grid>
    )
}