import React from 'react';
import s from './footer.module.css'

type PropsType = {
    logo?: string
    href: string
    name?: string
}

export const Partner = ({href, logo, name}: PropsType) => {
    return (
        <div className={s.linkContainer}>
            <a href={href} target={'_blank'} className={s.link}>
                {logo && <img src={logo} alt="bank"/>}
                {name && <span className={s.name}>{name}</span>}
            </a>
        </div>
    )
}