import React from 'react';
import {PersonalInformation} from "../userForm/personal-information";
import {Contacts} from "../userForm/contacts";
import {Password} from "../userForm/password";
import s from 'components/user/userForm/user-info-form.module.css'

export const UserInfoForm = () => {

    const submitHandler = (data: any) => {

    }

    return <div className={s.userInfoContainer}>
        <form onSubmit={submitHandler}>
            <PersonalInformation/>
            <Contacts/>
            <Password/>
            <input type='submit' value={'Сохранить'} className={s.submit}/>
        </form>
    </div>
}