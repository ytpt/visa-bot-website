import React from "react";
import style from "../../Account/Account.module.css";
import couple from "../../../img/couple.svg";
import hand from "../../../img/hand.svg";
import owl from "../../../img/owl.png";

const HaveTariff = ({username, fathers, email, setEmail, send}) => {

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
            if ( e.keyCode === 13 ) {
                saveResult();
            }
        });
    }

    const setInterval = ((function() {
        let id = arguments[0];
        if ( id === undefined ) {
            console.log('Передайте id элемента в функцию');
            return;
        }
        let elem = document.getElementById(id);
        if ( !elem ) {
            return;
        }
        if ( arguments.length !== 5 ) {
            console.log('Передайте id, строку, день, месяц, год в функцию');
            return;
        }
        let str = arguments[1], d = parseInt(arguments[2]), m = parseInt(arguments[3]), y = parseInt(arguments[4]);
        if ( isNaN(y) || isNaN(m) || isNaN(d) || y < 1582 || y > 9999 || m < 1 || m > 12 || d < 1 || d > 31 ) {
            console.log('Передайте корректную дату в функцию'); return;
        }
        let startDate = new Date(y,m-1, d);
        let today = new Date();
        let diffDays = Math.ceil(( today - startDate ) / ( 1000 * 60 * 60 * 24 ));
        if ( diffDays < 1 ) {
            console.log('Передайте дату раньше текущей в функцию');
            return;
        }
        elem.innerText = str + ' ' + diffDays + ' ' + goodwordform(diffDays,'д','ень...','ня...','ней...');
        function goodwordform(k,w,o1,o2,o5) {
            if (( k % 100 > 10 && k % 100 < 20) || k % 10 > 4 || k % 10 == 0 ) w += o5;
            else if ( k % 10 == 1 ) w += o1;
            else w += o2;
            return w;
        }
    })('counter','Бот ищет новые даты уже',8,7,2022),60000);

    return (
        <>
            <div className={style.tariff}>
                <div>
                    <h2>Главный заявитель:</h2>
                    <h3>{username}<br/>{fathers}</h3>
                </div>
                <div>
                    <h2>Ваш тариф:</h2>
                    <div className={style.tariff__card__img}>
                        <img src={couple} alt={'Пара'} width={75} height={75} />
                        <h3>Парный</h3>
                    </div>
                </div>
                <div className={style.tariff__alert}>
                    <h2>Способ уведомления:</h2>
                    <div id={'email'}>
                        <h3>{email}</h3>
                        <a onClick={edit}><img src={hand} alt={'Рука'} /></a>
                    </div>
                </div>
            </div>
            <div>
                <span id={'counter'} />
            </div>
            <div className={style.tariff__writeUs}>
                <img src={owl} alt={'Сова'} className={style.tariff__feedback_owl} />
                <div className={style.tariff__feedback_block}>
                    <div className={style.tariff__feedback_text}>
                        <h3>Внести больше изменений</h3>
                        <p>Опишите, что хотели бы поменять в своей заявке, и наши специалисты свяжутся с вами.</p>
                    </div>
                </div>
                <form className={style.tariff__feedback_form}>
                    <textarea placeholder={'Задайте нам вопрос'} cols={30} rows={5} required />
                    <div>
                        <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
                        <button onClick={send}>Отправить</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default HaveTariff;