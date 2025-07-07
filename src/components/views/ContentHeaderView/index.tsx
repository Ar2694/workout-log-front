import { Grid, Typography } from "@mui/material";

interface Props {
  text: string;
}

export default function ContentHeaderView({ text }: Props) {
  return (
    <Grid container direction="row" alignItems="center" flex={1}>
      <Typography color="primary.light" component="h4" variant="h4">
        {text}
      </Typography>
    </Grid>
  );
}
