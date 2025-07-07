import { Button as ButtonBase, ButtonProps, styled } from "@mui/material";
import { NavLinkProps } from "react-router";

interface Props extends ButtonProps {
    text?: string,
    onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void,
    to?: string,
    end?:boolean
}

const StyledButton = styled(ButtonBase)<ButtonProps | NavLinkProps>(() => ({
    minWidth: "fit-content",
}));

export default function Button({ text, ...props }: Props) {

    return (
        <StyledButton  {...props}  >
            {text}
        </StyledButton>
    )
}
