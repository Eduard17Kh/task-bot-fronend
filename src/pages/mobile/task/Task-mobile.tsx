import React from "react";
import './Task-mobile.css';
import FullWidthTabs from "../task-tab-panel/task-tab-panel";
import HeaderMobileComponent from "../../../components/mobile/header/header-mobile-component";

export default function TaskMobile() {
    return (
        <div>
            <HeaderMobileComponent></HeaderMobileComponent>
            <FullWidthTabs></FullWidthTabs>
        </div>
    );
}