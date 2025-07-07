import { blue, blueGrey, grey, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        desktop: true;
    }
}

const darkTheme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            desktop: 1050
        },
    },
    palette: {
        mode: "dark",
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
                    backgroundColor: grey[900]
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

                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: grey[900]
                }
            }
        },
        MuiSelect: {
            defaultProps: {
                size: "small"
            },
            styleOverrides: {
                root: {

                    textTransform: "capitalize",

                }
            }
        },
        MuiAutocomplete: {
            defaultProps: {
                disablePortal: true
            },
            styleOverrides: {
                root: {

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

export default darkTheme;