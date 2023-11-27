import React from 'react';
import Eye from 'components/assets/svg/eye-outline.svg'
import Mark from 'components/assets/svg/exclamation-mark.svg'
import Plus from 'components/assets/svg/plus.svg'
import Grid from 'components/assets/svg/grid.svg'
import Line from 'components/assets/svg/line.svg'

import s from './table-buttons.module.css'


export const TableButtons = () => {

    return <div className={s.buttonsContainer}>
        <div className={s.buttonsWithText}>
            <button className={s.infoButton}>
                <img src={Eye} alt="eye" className={s.buttonIcon}/>
                Просмотр ИС/ИР
            </button>
            <button className={s.infoButton}>
                <img src={Mark} alt="mark" className={s.buttonIcon}/>
                Доп сведения ИС/ИР
            </button>
            <button className={s.addButton}>
                <img src={Plus} alt="plus" className={s.buttonIcon}/>
                Добавить
            </button>
        </div>
        <div className={s.buttonsIcons}>
            <div className={`${s.checkboxAndIcon} ${s.itemGrid}`}>
                <input id="fid-1" type="radio" name="grid or line" value="grid"/>
                    <label htmlFor="fid-1"><img src={Grid} alt="grid"/></label>
            </div>
            <div className={`${s.checkboxAndIcon} ${s.itemLine}`}>
                <input id="fid-2" type="radio" name="grid or line" value="line" defaultChecked/>
                    <label htmlFor="fid-2"><img src={Line} alt="line" className={s.lineIcon}/></label>
            </div>
        </div>
    </div>
}