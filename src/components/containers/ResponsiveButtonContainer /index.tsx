import { Grid, GridProps, Stack, StackProps, styled } from "@mui/material"
import React from 'react'

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
    "& .MuiButtonBase-root": {
        height: "min-content"
    },
    [theme.breakpoints.down("desktop")]: {
        "& .MuiButtonBase-root": {
            flex: "1"
        },
    },
}));

interface Props extends StackProps {
    children: React.ReactNode
}

export default function ResponsiveButtonContainer(props: Props) {
    const {
        spacing = 2,
   
        direction = { mobile: "row", desktop: "row"},

        ...other
    } = props


    return (
        <StyledGrid container className="responsive-button-container" spacing={spacing}  direction={direction}   {...other} >
            {props.children}
        </StyledGrid>
    )
}
