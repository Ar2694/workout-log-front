
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiProvider } from "@mui/material/styles";
import { StyledEngineProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from "./themes";

interface ThemeContextProps {
  children: React.ReactNode;
}

export default function ThemeProvider(props: ThemeContextProps) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiProvider theme={lightTheme}>
        <CssBaseline />
        {props.children}
      </MuiProvider>
    </StyledEngineProvider>
  )
}
