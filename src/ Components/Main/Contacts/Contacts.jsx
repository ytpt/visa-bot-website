import React from "react";
import style from "./Contacts.module.css";
import phone from '../../../img/phone.svg';
import mail from '../../../img/mail.svg';
import geo from '../../../img/geoposition.svg';
import vk from '../../../img/vk-icon.svg';
import instagram from '../../../img/instagram-icon.svg';
import facebook from '../../../img/facebook-icon.svg';
import youtube from '../../../img/youtube-icon.svg';
import telegram from '../../../img/telegram-icon.svg';
import Map from "../Map/Map";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <h3>Контакты</h3>
            <div className={style.contacts__content}>
                <div className={style.contacts__content__info}>
                    <div className={style.contacts__phone}>
                        <img src={phone} alt={'Телефон'} width={27} height={27} />
                        <h4>8 800 950-33-98</h4>
                    </div>
                    <div className={style.contacts__mail}>
                        <img src={mail} alt={'Почта'} width={27} height={27} />
                        <p>get_your_visa@gmail.com</p>
                    </div>
                    <div className={style.contacts__addres}>
                        <img src={geo} alt={'Геопозиция'} width={27} height={27} />
                        <p>г.Томск, ул.Ленина, д.1</p>
                    </div>
                    <div className={style.contacts__social}>
                        <a><img src={vk} alt={'ВК'} width={21} height={26} /></a>
                        <a><img src={instagram} alt={'Инстаграм'} width={21} height={26} /></a>
                        <a><img src={facebook} alt={'Фэйсбук'} width={21} height={26} /></a>
                        <a><img src={youtube} alt={'Ютуб'} width={21} height={26} /></a>
                        <a><img src={telegram} alt={'Телеграм'} width={21} height={26} /></a>
                    </div>
                </div>
                <Map />
            </div>
        </div>
    )
}

export default Contacts;