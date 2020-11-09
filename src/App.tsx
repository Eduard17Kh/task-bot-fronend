import React from 'react';
import Main from "./pages/Main";
import './App.css';
import {Container, useMediaQuery} from "@material-ui/core";
import HeaderMobileComponent from "./components/mobile/header/header-mobile-component";
import RouterMobile from "./router/Router-mobile";

export default function App() {

    const matches = useMediaQuery("(min-width:600px)");
    if(!matches) {
        return (
            <div>
                <RouterMobile></RouterMobile>
            </div>
        )
    } else {
        return (
            <div className="App">
                <Container maxWidth="lg">
                    <Main></Main>
                </Container>
            </div>
        );
    }
}