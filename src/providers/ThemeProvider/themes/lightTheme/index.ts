import { blue, blueGrey, grey, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
cssVariables: true,
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 1050
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: blue[900],
      dark: blue[900],
      light: blue[700]
    },
    secondary: {
      main: blueGrey[700],
      dark: blueGrey[900],
      light: blueGrey[500]
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: blueGrey[50]
        },
        ".pointer": {
          cursor: "pointer"
        },

      }
    },
    MuiTextField: {
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFF"
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        size: "small"
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
          textTransform: "capitalize",
    
        },
       
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        disablePortal: true
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
          textTransform: "capitalize",
          "& .MuiInputBase-input.MuiAutocomplete-input": {
            width: "100%",

          },
          "& .MuiAutocomplete-inputRoot": {
            paddingRight: "39px"

          }
        },
        input: {
          textTransform: "capitalize",


        },
        option: {
          textTransform: "capitalize",
        }
      }
    }
    ,
    MuiInputLabel: {
      styleOverrides: {
        root: {
          textOverflow: "unset",
          color: blueGrey[500]
        }
      }
    }
    ,
    MuiMenuItem: {
      styleOverrides: {
        root: {
          textTransform: "capitalize"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "max-content",
          textTransform: "capitalize"
        },
        outlined: {
          backgroundColor: "#FFFFFF"
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          display: "block",
          "&.star-icon": {
            fill: yellow[700],
            width: "16px",
            height: "16px"
          },
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          "&.MuiAvatar-circular": {
            marginRight: "8px"
          }

        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: "0"
        }
      }
    }

  }
});

export default lightTheme;