import React from "react";
import style from "../../Account/Account.module.css";
import styles from "./Tariff.module.css";
import couple from "../../../img/couple.svg";
import hand from "../../../img/hand.svg";
import done from "../../../img/done.svg";

const HaveTariff = () => {

    const edit = () => {

        const tariffAlert = document.querySelector('#email');
        tariffAlert.innerHTML = `
            <input />
            <button>
                <img src=${done} alt='Готово' width={25} height={25} />
            </button>
        `;

        tariffAlert.querySelector('button').addEventListener('click', function() {
            const inputValue = document.querySelector('input').value;
            tariffAlert.innerHTML = `
                <h3>${inputValue}</h3>
                <button onClick={edit}>
                    <img src=${hand} alt={'Рука'} />
                </button>
            `;
        })
    }

    return (
        <>
            <div className={styles.tariff}>
                <div className={styles.tariff__person}>
                    <h2>Главный заявитель:</h2>
                    <h3>Маликова Анна Дмитриевна</h3>
                </div>
                <div className={styles.tariff__chosen}>
                    <h2>Ваш тариф:</h2>
                    <div className={style.acc__img}>
                        <img src={couple} alt={'Пара'} width={75} height={75} />
                        <h3>Парный</h3>
                    </div>
                </div>
                <div className={styles.tariff__alert}>
                    <h2>Способ уведомления:</h2>
                    <div id={'email'}>
                        <h3>ytpt@mail.ru</h3>
                        <button onClick={edit}>
                            <img src={hand} alt={'Рука'} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.counter}>
                <p>Бот ищет для Вас даты новые даты уже <span>28</span> дней...</p>
            </div>
        </>
    )
}

export default HaveTariff;