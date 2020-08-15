import React from 'react';
import './TopBarComponent.css';

class TopBar extends React.Component {

    render() {
        return(
            <div className="topbar">

            <div className="logo-section logo-row">
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
            </div>
      
            <div className="menu-section menu-row">
              <nav>
                <ul>
                  <li><a href="/">Главная</a></li>
                  <li><a href="#">Как работает?</a></li>
                  <li><a href="#">Поддержка</a></li>
                  <li><a href="#">Войти</a></li>
                  <li className="lang-changer">
                    <a href="en">EN</a>
                    <a href="#">/</a>
                    <a href="ru">RU</a>
                  </li>
                </ul>
              </nav>
            </div>
      
            </div>
      
        );
    }

}


export default TopBar;