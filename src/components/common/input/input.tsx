import React from 'react';
import {ChangeEvent, useState} from "react";
import searchIcon from '../../assets/svg/search.svg'
import s from './input.module.css'

type PropsType = {
    type: 'email' | 'password' | 'text' | 'search'
    placeholder: string
    name: string
    label: string
    disabled?: boolean
}

export const Input = ({type, placeholder, name, label, disabled}: PropsType) => {
    const [value, setValue] = useState<string>('')
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

    const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <label htmlFor="email" className={s.label}>
        {label}

        {type === 'search' && (
            <span>
              <img src={searchIcon} className={s.searchIcon} alt={'search icon'} />
            </span>
        )}
        <input type={'password' && visiblePassword ? 'text' : type} placeholder={placeholder} name={name} value={value}
               onChange={valueChangeHandler} className={s.input} disabled={disabled}/>

        {type === 'password' && (
            <a
                className={`${s.passwordControl} ${
                    visiblePassword ? s.showPassword : s.hidePassword
                }`}
                onClick={() => {
                    !disabled && setVisiblePassword(prevState => !prevState)
                }}
            ></a>
        )}
    </label>

}