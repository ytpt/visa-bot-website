import React from "react";
import style from "../Main.module.css";
import selfIcon from "../../../img/self-icon.svg";
import tableIcon from "../../../img/table-icon.svg";
import circleIcon from "../../../img/circle-icon.svg";
import handIcon from "../../../img/hand-icon.svg";

const Info = () => {
    return (
        <div className={style.main__info} id={'bot'}>
            <h4>Бот записи на собеседование  - это программа, которая в автоматическом режиме проверяет открытые даты и время для интервью на сайте посольства США в Ереване и уведомляет о появлении новых слотов для записи.</h4>
            <div className={style.main__info_block}>
                <div>
                    <img src={selfIcon} alt={'Человек выбирает сам'} width={100} height={100} />
                    <p>Больше не нужно самому мониторить расписание</p>
                </div>
                <div>
                    <img src={tableIcon} alt={'Таблица'} width={100} height={100} />
                    <p>3 раза в минуту наш бот проверяет новые слоты</p>
                </div>
                <div>
                    <img src={circleIcon} alt={'Круговорот'} width={100} height={100} />
                    <p>Если появилась дата, бот посылает уведомление</p>
                </div>
                <div>
                    <img src={handIcon} alt={'Рука'} width={100} height={100} />
                    <p>Просто нажми "Записаться"</p>
                </div>
            </div>
        </div>
    )
}

export default Info;