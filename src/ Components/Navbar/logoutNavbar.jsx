import React from "react";
import style from './Navbar.module.css';

const logoutNavbar = () => {
    return (
        <nav>
            <div>
                <a><img src={'../../img/user-icon.svg'} alt={'Войти в личный кабинет'}/></a>
            </div>
        </nav>
    )
}
export default logoutNavbar;