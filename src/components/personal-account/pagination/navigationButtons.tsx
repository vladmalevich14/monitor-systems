import React, {FC} from 'react'

import ArrowRight from '../../assets/svg/arrow-right.svg'
import DoubleArrowRight from '../../assets/svg/double-right-arrow.svg'
import ArrowLeft from '../../assets/svg/arrow-left.svg'
import DoubleArrowLeft from '../../assets/svg/double-left-arrow.svg'
import s from './pagination.module.css'

export type NavigationButtonProps = {
    onClick: () => void
    disabled?: boolean
}

export const PrevButton: FC<NavigationButtonProps> = ({onClick, disabled}) => {
    return (
        <div className={s.arrowsWrapper}>
            <button className={s.item} onClick={onClick} disabled={disabled}>
                <img src={DoubleArrowLeft} alt="double arrow left"/>
            </button>
            <button className={s.item} onClick={onClick} disabled={disabled}>
                <img src={ArrowLeft} alt="arrow left" className={s.arrow}/>
            </button>
        </div>
    )
}

export const NextButton: FC<NavigationButtonProps> = ({onClick, disabled}) => {
    return (
        <div className={s.arrowsWrapper}>
            <button className={s.item} onClick={onClick} disabled={disabled}>
                <img src={ArrowRight} alt="arrow right" className={s.arrow}/>
            </button>
            <button className={s.item} onClick={onClick} disabled={disabled}>
                <img src={DoubleArrowRight} alt="double arrow right"/>
            </button>
        </div>
    )
}
