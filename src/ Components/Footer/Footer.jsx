import React from "react";
import style from './Footer.module.css';
import triangle_white from '../../img/triangle-white.svg';
import vk from '../../img/vk-white.svg';
import instagram from '../../img/instagram-white.svg';
import facebook from '../../img/facebook-white.svg';
import youtube from '../../img/youtube-white.svg';
import telegram from '../../img/telegram-white.svg';

const Footer = () => {
    return (
        <div className={style.footer} id={'contacts'}>
            <nav>
                <div>
                    <div className={style.footer__contacts__home}>
                        <a href={'/main'}>
                            <img src={triangle_white} alt={'Домой'}/>
                            <h2>Домой</h2>
                        </a>
                    </div>
                    <a href={'tel:+78009503398'}>8 800 950-33-98</a>
                    <p>г.Томск, ул. Ленина, д.1</p>
                    <a href={'mailto:get_your_visa@gmail.com'}>get_your_visa@gmail.com</a>
                    <div className={style.footer__contacts__social}>
                        <a><img src={vk} alt={'ВК'} width={21} height={26} /></a>
                        <a><img src={instagram} alt={'Инстаграм'} width={21} height={26} /></a>
                        <a><img src={facebook} alt={'Фэйсбук'} width={21} height={26} /></a>
                        <a><img src={youtube} alt={'Ютуб'} width={21} height={26} /></a>
                        <a><img src={telegram} alt={'Телеграм'} width={21} height={26} /></a>
                    </div>
                </div>
                <div>
                    <h3>Про бот</h3>
                    <a href={'/main'}>Что такое бот?</a>
                    <a href={'/main'}>Как подключиться?</a>
                    <a href={'/main'}>Важное</a>
                </div>
                <div>
                    <h3>Про тарифы</h3>
                    <a href={'/main'}>Персональный</a>
                    <a href={'/main'}>Парный</a>
                    <a href={'/main'}>Семейный</a>
                </div>
                <div>
                    <h3>Про визу</h3>
                    <a href={'/main'}>Кому нужна виза?</a>
                    <a href={'/main'}>5 шагов к получению</a>
                    <a href={'/main'}>Отказ в визе</a>
                </div>
            </nav>
        </div>
    );
}

export default Footer;