import React from 'react';
import s from "./tableFilter.module.css";

export const TableFilter = () => {
    return <div className={s.tableFilterContainer}>
        <span className={s.nameTable}>Список АИС</span>
        <div className={s.radioGroupContainer}>
            Показывать по:
            <div className={s.radioGroup}>
                <div className={s.item}>
                    <input id="pages-25" type="radio" name="radio" value="25" defaultChecked/>
                    <label htmlFor="pages-25">25</label>
                </div>
                <div className={s.item}>
                    <input id="pages-50" type="radio" name="radio" value="50"/>
                    <label htmlFor="pages-50">50</label>
                </div>
                <div className={s.item}>
                    <input id="pages-100" type="radio" name="radio" value="100"/>
                    <label htmlFor="pages-100">100</label>
                </div>
            </div>
        </div>
    </div>
}