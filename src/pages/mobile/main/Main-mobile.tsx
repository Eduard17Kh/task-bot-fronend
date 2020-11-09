import React from "react";
import './Main-mobile.css';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import HeaderMobileComponent from "../../../components/mobile/header/header-mobile-component";

export default function MainMobile() {
    return (
        <div>
            <HeaderMobileComponent></HeaderMobileComponent>
            <div className="main-block">
                <span>Эдуард, добро пожаловать в web-версию чат-бота BA_bot</span>
            </div>
            <div className="main-block">
                <div className="button-block">
                    <Button variant="contained" className="button-background"
                            component={Link} to={'/team'}>КОМАНДА
                    </Button>
                </div>
                <div className="button-block">
                    <Button variant="contained" className="button-background"
                            component={Link} to={'/task'}>ЗАДАЧИ
                    </Button>
                </div>
            </div>
        </div>
    );
}