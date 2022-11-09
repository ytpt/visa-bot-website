import React from "react";
import style from './Navbar.module.css';

const loginNavbar = () => {
    return (
        <nav>
            <div>
                <a><img src={'../../img/home-icon.svg'} alt={'Домой'}/></a>
                <a><img src={'../../img/letter-icon.svg'} alt={'Почта'}/></a>
                <a><img src={'../../img/settings-icon.svg'} alt={'Настройки'}/></a>
            </div>
            <div>
                <a><img src={'../../img/exit-icon.svg'} alt={'Выход'}/></a>
            </div>
        </nav>
    )
}
export default loginNavbar;