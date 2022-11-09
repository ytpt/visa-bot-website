import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <nav>
                <a href={'#bot'}><p>Что такое бот?</p></a>
                <a href={'#subscribe'}><p>Как подключиться</p></a>
                <a href={'#options'}><p>Тарифы</p></a>
                <a href={'#about'}><p>Про визу</p></a>
                <a href={'#contacts'}><p>Контакты</p></a>
            </nav>
        </div>
    );
}

export default Header;