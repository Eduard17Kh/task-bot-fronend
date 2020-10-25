import React from "react";
import './Main-mobile.css';
import HeaderMobileComponent from "../../../components/mobile/header/header-mobile-component";
import FullWidthTabs from "../task-tab-panel/task-tab-panel";

export default function MainMobile() {
    return (
        <div>
            <HeaderMobileComponent></HeaderMobileComponent>
            <FullWidthTabs></FullWidthTabs>
        </div>
    );
}