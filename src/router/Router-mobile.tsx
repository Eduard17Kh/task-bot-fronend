import React from "react";
import MainMobile from "../pages/mobile/main/Main-mobile";
import TaskMobile from "../pages/mobile/task/Task-mobile";
import TeamMobile from "../pages/mobile/team/Team-mobile";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function RouterMobile() {
    return (
        <Switch>
            <Route exact path='/' component={MainMobile}/>
            <Route path='/task' component={TaskMobile}/>
            <Route path='/team' component={TeamMobile}/>
        </Switch>
    );
}