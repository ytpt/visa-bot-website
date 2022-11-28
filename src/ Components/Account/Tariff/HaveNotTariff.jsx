import React from "react";
import style from "../Account.module.css";
import single from "../../../img/single.svg";
import couple from "../../../img/couple.svg";
import children from "../../../img/children.svg";
import owl from "../../../img/owl.png";

const HaveNotTariff = () => {

    const showDesc = (e) => {
        const link = e.target;
        link.style.display = 'none';

        const sibling = link.nextElementSibling;
        sibling.style.display = 'block';
    }

    return (
        <div>
            <h2>Чтоб подключиться к боту, сначала выберите подходящий тариф:</h2>
            <div className={style.tariff__cards}>
                <div className={style.tariff__card}>
                    <div className={style.tariff__card__img}>
                        <img src={single} alt={'Один'} width={75} height={75} />
                    </div>
                    <h2>Персональный</h2>
                    <a onClick={e => showDesc(e)}>Узнать подробнее</a>
                    <div className={style.tariff__desc}>
                        <p>В персональный тариф входит подключение бота к личному кабинету одного совершеннолетнего заявителя.</p>
                        <p>Шанс записаться - <span>высокий</span>.</p>
                    </div>
                    <h4>Цена: <span>2 000₽</span></h4>
                    <button>Выбрать</button>
                </div>
                <div className={style.tariff__card}>
                    <div className={style.tariff__card__img}>
                        <img src={couple} alt={'Пара'} width={75} height={75} />
                    </div>
                    <h2>Парный</h2>
                    <a onClick={e => showDesc(e)}>Узнать подробнее</a>
                    <div className={style.tariff__desc}>
                        <p>В парный тариф входит подключение бота к личному кабинету одного заявителя, для совместной подачи заявления на визу двумя совершеннолетними лицами.</p>
                    </div>
                    <h4>Цена: <span>3 500₽</span></h4>
                    <button>Выбрать</button>
                </div>
                <div className={style.tariff__card}>
                    <div className={style.tariff__card__img}>
                        <img src={couple} alt={'Пара'} width={75} height={75} />
                        <img src={children} alt={'Дети'} width={75} height={75} />
                    </div>
                    <h2>Семейный</h2>
                    <a onClick={e => showDesc(e)}>Узнать подробнее</a>
                    <div className={style.tariff__desc}>
                        <p>В семейный тариф включены один или два совершеннолетних заявителя и их несовершеннолетние дети. Всего детей в тарифе - до трёх. За каждого следующего ребёнка необходимо доплатить 750₽.</p>
                    </div>
                    <h4>Цена: <span>5 000₽</span></h4>
                    <button>Выбрать</button>
                </div>
            </div>
            <div className={style.tariff__feedback}>
                <img src={owl} alt={'Сова'} className={style.tariff__feedback_owl} />
                <div className={style.tariff__feedback_block}>
                    <div className={style.tariff__feedback_text}>
                        <h3>Остались вопросы?</h3>
                        <p>Оставьте заявку и наши специалисты свяжутся с вами и ответят на все вопросы.</p>
                    </div>
                </div>
                <form className={style.tariff__feedback_form}>
                    <textarea placeholder={'Задайте нам вопрос'} cols={30} rows={5} required />
                    <div>
                        <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
                        <button onClick={(e) => e.preventDefault()}>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HaveNotTariff;