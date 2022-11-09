import React from "react";
import style from "../Main.module.css";
import arrowIcon from "../../../img/arrow-icon.svg";
import {useNavigate} from "react-router-dom";

const StepsBot = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    }

    return (
        <div className={style.main__steps_bot} id={'subscribe'}>
            <h3>Как подключиться к боту?</h3>
            <div>
                <div className={style.login}>
                    <h4>1. Будем знакомы</h4>
                    <p>Зарегистрируйся на сайте, затем войди в свой личный кабинет. Внимательно заполни информацию о себе.</p>
                    <button onClick={handleClick}>
                        <p>Регистрация</p>
                        <img src={arrowIcon} alt={'Стрелка вправо'} width={6} height={11}/>
                    </button>
                </div>
                <div className={style.rules}>
                    <h4>2. Как мы работаем</h4>
                    <p>Внимательно ознакомься с нашими правилами и выбери подходящий тариф.</p>
                </div>
                <div className={style.tell_us}>
                    <h4>3. Обратная связь</h4>
                    <p>Расскажи нам, как тебе будет удобнее получать уведомления о новых датах и времени.</p>
                </div>
                <div className={style.pay}>
                    <h4>4. Оплата</h4>
                    <p>Оплати выбранный тариф. Теперь тебе не нужно тратить время, бесконечно обновляя страницу, займись любимым делом!</p>
                </div>
            </div>
        </div>
    )
}

export default StepsBot;