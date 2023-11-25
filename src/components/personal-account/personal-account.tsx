import s from "./personal-account.module.css";
import ArrowLeft from "components/assets/svg/arrow-left.svg";
import ArrowLeftBlack from "components/assets/svg/arrow-left-black.svg";
import {Table} from "components/personal-account/table/table";

export const PersonalAccount = () => {
    return <div className={s.personalAccountContainer}>
        <div className={s.linkToMain}>
            <div className={s.linkContainer}>
                <img src={ArrowLeft} alt="arrow left"/>
                <a href="#" className={s.linkBack}>Главная</a>
            </div>

            <div className={s.linkContainer}>
                <img src={ArrowLeftBlack} alt="arrow left"/>
                <a href="#" className={s.linkProfile}>Личный кабинет</a>
            </div>
        </div>
        <h1>Личный кабинет</h1>
        <div className={s.slider}></div>
        <Table/>
    </div>
}