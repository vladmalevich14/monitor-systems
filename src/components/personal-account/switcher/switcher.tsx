import React from 'react';
import s from "./switcher.module.css";

export const Switcher = () => {
    return <div className={s.switcherContainer}>
        <div className={s.radioGroup}>
            <div className={s.item}>
                <input id="radio-1" type="radio" name="tab" value="1" defaultChecked/>
                <label htmlFor="radio-1">Реестры</label>
            </div>
            <div className={s.item}>
                <input id="radio-2" type="radio" name="tab" value="2"/>
                <label htmlFor="radio-2">Электронные сервисы</label>
            </div>
            <div className={s.item}>
                <input id="radio-3" type="radio" name="tab" value="3"/>
                <label htmlFor="radio-3">Потребление данных</label>
            </div>
            <div className={s.item}>
                <input id="radio-4" type="radio" name="tab" value="4"/>
                <label htmlFor="radio-4">Справочники</label>
            </div>
            <div className={s.item}>
                <input id="radio-5" type="radio" name="tab" value="5"/>
                <label htmlFor="radio-5">Отчёты</label>
            </div>

        </div>
    </div>
}