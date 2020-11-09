import React from 'react';
import Logo from '../../../static/images/logo.png';
import './header-mobile-component.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export default function HeaderMobileComponent() {
    let hasBackButton = false;
    function checkRoute(): string {
        if (window.location.pathname === '/') {
            return 'BA_bot';
        } else if (window.location.pathname === '/task') {
            return 'Мои задачи';
        } else if (window.location.pathname === '/team') {
            return 'Моя команда';
        } else {
            return 'Такой страницы нет'
        }
    }
    if (window.location.pathname !== '/') {
        hasBackButton = true;
    }
    return (
      <div className="header-mobile">
          <div className="header-mobile-block-logo">
              {hasBackButton &&
              <Link to = "/" >
                  <img className="header-mobile-logo" src={Logo}/>
              </Link>
              }
              {!hasBackButton && <img className="header-mobile-logo" src={Logo}/>}
          </div>
          <div className="header-mobile-block-h1">
              <h1 className="header-mobile-h1">{checkRoute()}</h1>
          </div>
      </div>
    );
}