import {Input} from "components/common/input/input";
import s from './table.module.css'
import {TableButtons} from "components/personal-account/table/table-buttons";

export const Table = () => {
    return <div>
        <div className={s.searchInput}>
            <div className={s.inputWrapper}>
        <Input type={'search'} placeholder={'Выберите ИС/СР для внесения метаданных...'} name={'search'} label={'Выбор ИС/СР для внесения метаданных'} />
            </div>
        <button className={s.buttonSearch}>Показать</button>
        </div>
        <TableButtons />
        <div className={s.table}></div>
    </div>
}