import React from "react";
import style from "./About.module.css";
import visa from '../../../img/visa.jpg';
import cross from '../../../img/cross.png';
import triangle from '../../../img/triangle.png';
import deny from '../../../img/deny.jpg';

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.about__need} id={'about'}>
                <img src={visa} alt={'Виза'} />
                <div className={style.about__need__text}>
                    <img className={style.cross} src={cross} alt={'Крестик'} width={230} height={230} />
                    <img className={style.triangle} src={triangle} alt={'Линия'} width={165} height={137} />
                    <h3>Кому нужна виза</h3>
                    <p>Как правило, гражданин иностранного государства, который хочет въехать в США, должен сначала получить визу.</p>
                    <p>Некоторые туристы имеют право въезжать в США без визы, если они соответствуют требованиям программы безвизового въезда в США (VWP).</p>
                    <p>VWP позволяет путешественникам с действующим электронным паспортом въезжать в США без визы на срок до 90 дней.</p>
                    <p>Чтобы узнать обо всех подробностях программы VWP, посетите страницу:</p>
                    <a href={'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visa-waiver-program.html'} target="_blank">Ссылка</a>
                </div>
            </div>
            <div className={style.about__getVisa} id={'5steps'}>
                <h3>5 шагов к получению визы</h3>
                <div className={style.getVisa__steps}>
                    <div className={style.visaType}>
                        <h5>Первый шаг</h5>
                        <h4>Определитесь с типом визы</h4>
                        <p>Решите, какой из типов виз подходит для Вашего путешествия в США. Подробная информация о типах виз может быть найдена здесь:</p>
                        <a href={'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/all-visa-categories.html'} target="_blank">Ссылка</a>
                    </div>
                    <div className={style.visaForm}>
                        <h5>Второй шаг</h5>
                        <h4>Заполните онлайн форму DS-160</h4>
                        <p>Форма DS-160 - это правительственная онлайн форма.</p>
                        <p>Каждый подающий должен заполнить форму до того, как будет подавать заявление на визу США.</p>
                        <a href={'https://ceac.state.gov/CEAC'} target="_blank">Ссылка на форму</a>
                    </div>
                    <div className={style.userAccount}>
                        <h5>Третий шаг</h5>
                        <h4>Создайте и заполните личный кабинет заявителя</h4>
                        <ul>
                            <li>Создайте личный кабинет.</li>
                            <li>Внесите информацию о заявителе, чтобы закончить регистрацию.</li>
                            <li>Добавьте номер формы DS-160 для каждого заявителя, подающего на визу.</li>
                            <li>Укажите адрес или выберите локацию, где вы получите документы из Консульства.</li>
                            <li>Оплатите визовый сбор, используя один из способов оплаты, доступных для страны, где вы подаётесь на визу.</li>
                            <li>Запишитесь на собеседование.</li>
                        </ul>
                    </div>
                    <div className={style.interview}>
                        <h5>Четвертый шаг</h5>
                        <h4>Прийдите в назначенную дату и время на интервью.</h4>
                        <p>Прийдите к зданию консульства за 15 минут до назначенного времени</p>
                    </div>
                    <div className={style.visaCheck}>
                        <h5>Пятый шаг</h5>
                        <h4>После интервью, проверьте визовый статус и дату доставки документов</h4>
                        <p>Следуйте инструкцям, которые Вам дали в консульстве.</p>
                    </div>
                </div>
            </div>
            <div className={style.about__deny} id={'deny'}>
                <img src={deny} alt={'Ошибка в визе'} width={700} />
                <h3>Отказ в визе</h3>
                <div>
                    <p>Если туристу было отказано в визе, то сотрудник консульства выдает письмо с указанием причины отказа.</p>
                    <p>Если письмо об отказе имеет отметку <strong>214(b)</strong> - это означает, что в настоящее время заявитель не имеет права на получение визы в соответствии с иммиграционными требованиями США.</p>
                    <p>Если заявитель хочет переподать заявление на визу, он должен заново оплатить консульский сбор, назначить новую дату собеседования и предоставить информацию о том, как обстоятельства изменились с момента подачи первоначального заявления.</p>
                    <p>Если письмо об отказе имеет отметку <strong>221(g)</strong> - это означает, что заявителю необходимо предоставить дополнительную информацию для продолжения рассмотрения заявления. Письмо с отказом содержит инструкции, которые необходимо выполнить. Заявитель не должен повторно оплачивать визовый сбор.</p>
                </div>
            </div>
        </div>
    )
}

export default  About;