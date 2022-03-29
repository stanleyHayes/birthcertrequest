import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider} from "@mui/lab";

const theme = createTheme({
    typography: {
        // fontFamily: 'Raleway, Chakra Petch, IBM Plex Mono, IBM Plex Sans, IBM Plex Serif, Inconsolata, Nunito, Quicksand, Raleway, Spartan, ',
        // fontFamily: 'Raleway',
        fontFamily: 'Inconsolata'

    },
    palette: {
        primary: {
            main: '#5D3EBC'
        },
        secondary: {
            main: '#FFCD31'
        },
        background: {
            default: '#F1EEFD',
            paper: '#FFFFFF',
            light: '#F5F6FA'
        },
        text: {
            link: '#5D3EBC',
            secondary: '#323130',
            primary: '#909091',
        },
        action: {
            active: '#5D3EBC'
        },
        mode: 'light'
    },
    shape: {
        borderRadius: 32
    }
});


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <App/>
                    </LocalizationProvider>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
