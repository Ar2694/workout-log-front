import { Container, Grid } from "@mui/material";
import SideNavView from "components/views/SideNavView";
import ThemeContext from "providers/ThemeProvider";
import PaperContainer from "../PaperContainter";
import styles from "./PageContainer.module.css";

export default function PageContainer(props: any) {
  return (
    <ThemeContext>
      <Container classes={styles} className={`page-container ${props.className}`} disableGutters maxWidth={false}>
        <Grid container direction="row">
          <SideNavView />
          <Grid className="page-content" container flex={1} margin={{ mobile: "60px 20px", desktop: "0px" }}>
            <PaperContainer  spacing={{desktop: 6, mobile:6}} flex={1} className="page-paper" direction="column">
              {props.children}
            </PaperContainer>
          </Grid>
          <Grid display={{ mobile: "none", desktop: "flex" }} />
        </Grid>
      </Container>
    </ThemeContext>
  )
}
