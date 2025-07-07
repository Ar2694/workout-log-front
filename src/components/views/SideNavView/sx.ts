import { SxProps } from "@mui/material";

const sx: SxProps = {
  width: "208px",
  marginRight: "50px",
  "& .MuiDrawer-paper": {
  
    backgroundColor: "primary.main",
    border: "none",
    minHeight: "100vh",
    width: "208px" 
  },
  "& .MuiListItemButton-root": {
    padding: "12px 75px 12px 25px",
    color: "primary.contrastText"
  },
  "& .MuiListItemButton-root:hover, & .MuiListItemButton-root.active": {
    backgroundColor: "primary.light"
  },
  "& .MuiListItemIcon-root": {
    minWidth: "40px",
    color: "primary.contrastText"
  }
};

export default sx;