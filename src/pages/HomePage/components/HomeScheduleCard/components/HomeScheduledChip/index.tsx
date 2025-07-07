import { Chip, getContrastRatio, useTheme } from "@mui/material";

export function HomeScheduledChip(props: any) {
    const theme = useTheme();
    const contrastColor = getContrastRatio(props.color, "#fff") > 2 ? "#fff" : "#111";
    const sx = {
        backgroundColor: props.color,
        color: contrastColor,
        boxShadow: theme.shadows[4],
        "& .MuiChip-icon": {
            fill: contrastColor
        },
        "&:hover": {
            backgroundColor: props.color,
            opacity: "0.8"
        }
    }

    return (
        <Chip className="scheduled-chip" label={props.label} size="small" sx={sx} {...props} />
    )

}