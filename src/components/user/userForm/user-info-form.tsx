import {PersonalInformation} from "components/user/userForm/personal-information";
import {Contacts} from "components/user/userForm/contacts";
import {Password} from "components/user/userForm/password";
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