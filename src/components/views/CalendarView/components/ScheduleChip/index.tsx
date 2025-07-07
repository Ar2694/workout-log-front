import { Chip, ChipProps, getContrastRatio, styled } from "@mui/material"

const StyledChip = styled(Chip)<ChipProps>(({ theme }) => ({
  justifyContent: "flex-end",
  flexDirection: "row-reverse",
  padding: "2px 5px",
  lineHeight: "normal",
  boxShadow: theme.shadows[4],
  "& .MuiChip-label": {
    marginRight: "auto",
    display: "block"
  },
  "& .MuiChip-icon": {
    margin: "0",
    cursor: "pointer"
  }
}))


export default function ScheduledChip(props: any) {
  const contrastColor = getContrastRatio(props.color, "#fff") > 2 ? "#fff" : "#111";
  const sx = {
    backgroundColor: props.color,
    color: contrastColor,
    "& .MuiChip-icon": {
      fill: contrastColor
    },
    "&:hover": {
      backgroundColor: props.color,
      opacity: "0.8"
    }
  }

  return (
    <StyledChip label={props.label} size="small" sx={sx} {...props} />
  )
}
