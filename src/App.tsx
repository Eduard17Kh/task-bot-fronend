import React from 'react';
import Main from "./pages/Main";
import './App.css';
import {Container, useMediaQuery} from "@material-ui/core";
import MainMobile from "./pages/mobile/main/Main-mobile";

export default function App() {

    const matches = useMediaQuery("(min-width:600px)");
    if(!matches) {
        return (
            <MainMobile></MainMobile>
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