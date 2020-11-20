import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#bde8fc",
      main: "#3babe9",
      contrastText: "#ffffff"
    },
    text: {
      primary: "#3babe9",
      secondary: "#a8a8a8"
    }
  },
  typography: {
    h1: {
      fontSize: "1rem"
    },
    h2: {
      fontSize: "0.5rem",
      textAlign: "center"
    },
    body1: {
      fontSize: "0.5rem",
      fontWeight: 300,
      whiteSpace: "pre",
      textAlign: "center"
    },
    button: {
      fontSize: "0.8rem",
      textTransform: "none"
    }
  }
});
