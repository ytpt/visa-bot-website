import React from "react";
import style from "../../Account/Account.module.css";
import styles from "./Tariff.module.css";
import couple from "../../../img/couple.svg";
import hand from "../../../img/hand.svg";

const HaveTariff = ({username, fathers, email, setEmail}) => {

    let errorMessage = document.createElement('p');

    const edit = () => {
        const tariffAlert = document.querySelector('#email');
        const link = tariffAlert.querySelector('a');
        let titleEmail = tariffAlert.querySelector('h3');
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('value', '');

        titleEmail.style.display = 'none';
        link.style.display = 'none';
        tariffAlert.append(input);

        input.oninput = function() {
            if ( input.value !== '' && input.value !== email ) {
                if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value) ) {
                    errorMessage.innerHTML = '';
                    titleEmail.innerHTML = input.value;
                } else {
                    errorMessage.innerHTML = 'Введите корректный E-mail.';
                    errorMessage.style.color = 'red';
                    errorMessage.style.fontSize = '12px';
                }
            }
        }

        const saveResult = function() {
            input.style.display = 'none';
            link.style.display = 'block';
            titleEmail.style.display = 'block';
            localStorage.setItem('newEmail', titleEmail.textContent);
            if ( errorMessage.value !== '' ) {
                tariffAlert.parentNode.append(errorMessage);
            }
        }

        document.addEventListener('click', function(e) {
            const withinBoundaries = tariffAlert.contains(e.target);
            if ( !withinBoundaries ) {
                saveResult();
            }
        });
        document.addEventListener('keydown', function(e) {
            if( e.keyCode === 13 ) {
                saveResult();
            }
        });
    }

    return (
        <>
            <div className={styles.tariff}>
                <div className={styles.tariff__person}>
                    <h2>Главный заявитель:</h2>
                    <h3>{username}<br/>{fathers}</h3>
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
                        <h3>{email}</h3>
                        <a onClick={edit}><img src={hand} alt={'Рука'} /></a>
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