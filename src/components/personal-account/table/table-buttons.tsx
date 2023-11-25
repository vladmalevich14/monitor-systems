import Eye from '../../assets/svg/eye-outline.svg'
import Mark from '../../assets/svg/exclamation-mark.svg'
import Plus from '../../assets/svg/plus.svg'
import Grid from '../../assets/svg/grid.svg'
import Line from '../../assets/svg/line.svg'

import s from './table.module.css'


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
            <div className={s.checkboxAndIcon}>
            <img src={Grid} alt="grid"/>
            <input type="radio" name={'grid or line'} className={s.checkbox}/>
            </div>
            <div className={s.checkboxAndIcon}>
            <img src={Line} alt="line" className={s.lineIcon}/>
            <input type="radio" name={'grid or line'} className={s.checkbox} />
            </div>
        </div>
    </div>
}