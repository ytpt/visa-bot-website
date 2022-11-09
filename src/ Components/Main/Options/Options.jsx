import React from "react";
import style from './Options.module.css';
import single from '../../../img/single.svg';
import couple from '../../../img/couple.svg';
import children from '../../../img/children.svg';

const Options = () => {
    return (
        <div className={style.main__options} id={'options'}>
            <div>
                <h3>Сколько стоит бот?</h3>
                <div className={style.cards}>
                    <div className={style.cards__card}>
                        <div className={style.card__img}>
                            <img src={single} alt={'Один'} width={75} height={75} />
                        </div>
                        <h2>Персональный</h2>
                        <div className={style.card__desc}>
                            <p>Один совершеннолетний заявитель.</p>
                            <p>Высокий шанс быстро записаться.</p>
                            <h3>Человек в тарифе - 1</h3>
                        </div>
                        <h4>Цена: <span>2 000₽</span></h4>
                        <button>Мне подходит</button>
                    </div>
                    <div className={style.cards__card}>
                        <div className={style.card__img}>
                            <img src={couple} alt={'Пара'} width={75} height={75} />
                        </div>
                        <h2>Парный</h2>
                        <div className={style.card__desc}>
                            <p>Два соврешеннолетних заявителя.</p>
                            <p>Высокий шанс быстро записаться.</p>
                            <h3>Человек в тарифе - 2</h3>
                        </div>
                        <h4>Цена: <span>3 500₽</span></h4>
                        <button>Мне подходит</button>
                    </div>
                    <div className={style.cards__card}>
                        <div className={style.card__img}>
                            <img src={couple} alt={'Пара'} width={75} height={75} />
                            <img src={children} alt={'Дети'} width={75} height={75} />
                        </div>
                        <h2>Семейный</h2>
                        <div className={style.card__desc}>
                            <p>Один/два совершеннолетних заявителя и их дети до 18 лет.</p>
                            <p>В тариф включены места на 3 детей. Каждый следующий: 750₽.</p>
                        </div>
                        <h4>Цена: <span>5 000₽</span></h4>
                        <button>Мне подходит</button>
                    </div>
                    {/*<div className={style.cards__card}>*/}
                    {/*    <div className={style.card__img}>*/}
                    {/*        <img src={single} alt={'Один'} width={75} height={75} />*/}
                    {/*        <img src={couple} alt={'Пара'} width={75} height={75} />*/}
                    {/*    </div>*/}
                    {/*    <h2>Групповой</h2>*/}
                    {/*    <div className={style.card__desc}>*/}
                    {/*        <p>Группа из совершеннолетних и несовершеннолетних лиц.</p>*/}
                    {/*        <h3>Человек в тарифе - до 6</h3>*/}
                    {/*    </div>*/}
                    {/*    <h4>Цена: <span>7 500₽</span></h4>*/}
                    {/*    <button>Мне подходит</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Options;