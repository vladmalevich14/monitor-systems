import {LoginForm} from "components/login/login-form";
import ArrowLeft from '../assets/svg/arrow-left.svg'
import s from './login-form.module.css'

export const Login = () => {

    return <div className={s.login}>
        <div className={s.linkToMain}>
            <img src={ArrowLeft} alt="arrow left"/>
            <a href="#" className={s.linkBack}>Вернуться на главную</a>
        </div>
        <LoginForm/>
    </div>
}