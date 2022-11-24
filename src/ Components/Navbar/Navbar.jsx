import React from "react";
import style from './Navbar.module.css';
import logo from '../../img/logo.svg';
import homeIcon from '../../img/home-icon.svg';
import letterIcon from '../../img/letter-icon.svg';
import settingsIcon from '../../img/settings-icon.svg';
import loginIcon from '../../img/user-icon.svg';
import logoutIcon from '../../img/cross-white.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = ({isLogin}) => {

    const navigate = useNavigate();
    const redirectToLogin = () => {
        navigate('/login');
    }

    const redirectToMain = () => {
        navigate('/main');
    }

    return (
        <div className={style.navbar}>
            <nav className={style.navbar__icons}>
                {isLogin
                    ? <div>
                        <div className={style.navbar__icons_block}>
                            <a href={'/main'}><img src={homeIcon} alt={'Домой'} width={25} height={25} /></a>
                            <a><img src={letterIcon} alt={'Почта'} width={25} height={25} /></a>
                            <a><img src={settingsIcon} alt={'Настройки'} width={25} height={25} /></a>
                            <a onClick={redirectToMain}>
                                <img src={logoutIcon} alt={'Выход'} width={25} height={25} />
                            </a>
                        </div>
                    </div>
                    : <div className={style.navbar__login}>
                        <a onClick={redirectToLogin}>
                            <img src={loginIcon} alt={'Вход в личный кабинет'} width={25} height={25} />
                        </a>
                        <p>Войти</p>
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navbar;