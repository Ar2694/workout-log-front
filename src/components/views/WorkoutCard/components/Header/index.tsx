import { Avatar, CardHeader, CardHeaderProps, IconButton, Menu, MenuItem, Stack, styled, Typography } from "@mui/material"
import { red, yellow } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import dayjs from "dayjs";
import StarIcon from '@mui/icons-material/Star';




const StyledHeader = styled(CardHeader)<CardHeaderProps>(({ theme }) => ({
  padding: 0,
  alignItems:"center",
  "& .MuiCardHeader-title":{
  fontSize: "26px",
  textTransform: "capitalize",

  },


}));


export default function Header(props: any) {
  const { workoutName} = props;
  return (
    <StyledHeader title={workoutName}  />
  )
}
