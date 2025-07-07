import { Grid, GridProps, InputLabel, Stack, StackProps } from "@mui/material"




interface FormViewProps extends GridProps {
    children?: React.ReactNode;
    others?: any
}
export default function FormView(props: FormViewProps) {
    const { spacing = 3, direction = "column", ...others } = props;

    return (
        <Grid spacing={spacing} container direction={direction} {...others} >
            {props.children}
        </Grid>
    )
}

interface FormRowProps extends GridProps {
    others?: any
    children?: React.ReactNode,
    label?: string
}

export function FormRow(props: FormRowProps) {
    const { label, spacing,  direction = "column", ...other } = props;
    return (
        <Grid  spacing={spacing ?? 1} direction={direction} container {...other}>
            {label && <InputLabel color="primary">{label}</InputLabel>}
            {props.children}
        </Grid>
    )
}