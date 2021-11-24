import './App.scss';
import Advertisement from "./components/Advertisements/Advertisement";
import {createTheme, MuiThemeProvider} from "@material-ui/core";
import {blue, pink} from "@material-ui/core/colors";
import Logger from "./utils/Logger";
import {API} from "./utils/Api";

const theme = createTheme({
    palette: {
        primary: {
            light: blue[400],
            main: blue[500],
            dark: blue[600],
        },
        secondary: {
            light: pink[400],
            main: pink[500],
            dark: pink[600],
        },
    },
});

const App = () => {
    API.get("/posts").then(response =>{Logger.info(response)})

    return (
        <MuiThemeProvider theme={theme}>
            <Advertisement/>
        </MuiThemeProvider>
    );
}

export default App;
