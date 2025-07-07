import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import PaperContainer from "components/containers/PaperContainter";
import styles from "./HomeNavCard.module.css";

export default function HomeNavCard(props: any) {
  const { icon, text, onClick } = props;

  return (
    <PaperContainer className={`home-nav-card ${styles.root}`} p={0} size={{ desktop: 6, mobile: 12 }}>
      <CardActionArea className="home-nav-card-button" onClick={onClick}>
        <Grid className="home-nav-card-content" container direction="column" alignItems="center" spacing={1}>
          <Grid className="home-nav-item" >
            {icon}
          </Grid>
          <Grid className="home-nav-item">
            <Typography className="text">{text}</Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </PaperContainer>
  )
}
