import React from 'react';
import {Input} from "../../common/input/input";
import s from './table.module.css'
import {TableButtons} from "./buttons/table-buttons";
import {TableFilter} from "./filter/tableFilter";
import {TableRow} from "./table-row/table-row";
import {Pagination} from "../pagination/pagination";
import {useState} from "react";

export const Table = () => {

    const tableData = [
        {id: '1', name: 'АИС «Открытая платформа «Образование»»', book: 45, server: 111, bookMark: 23},
        {id: '2', name: 'АИC «Электронный журнал куратора»', book: 12, server: 32, bookMark: 6},
        {id: '3', name: 'АИС SCHOOLS.BY', book: 7, server: 0, bookMark: 0},
        {id: '4',
            name: 'АИС "Подготовка прогнозных показателей приема и формирование органа...',
            book: 44,
            server: 78,
            bookMark: 11
        },
        {id: '5', name: 'Информационно-аналитическая система ИАС "1-ДУ"', book: 12, server: 24, bookMark: 0},
        {id: '6',
            name: 'АИС "Общереспубликанский банк данных участников централизованного т...',
            book: 55,
            server: 101,
            bookMark: 23
        },
        {id: '7', name: 'Управление контингентом студентов', book: 4, server: 0, bookMark: 0},
        {id: '8', name: 'Республиканская АИС «Электронное образование»', book: 29, server: 87, bookMark: 14},
        {id: '9',
            name: 'Республиканская АИС ведения централизованного банка данных документ...',
            book: 31,
            server: 72,
            bookMark: 16
        },
    ]

    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)

    return <div className={s.tableContainer}>
        <div className={s.searchInput}>
            <div className={s.inputWrapper}>
                <Input type={'search'} placeholder={'Выберите ИС/СР для внесения метаданных...'} name={'search'}
                       label={'Выбор ИС/СР для внесения метаданных'}/>
            </div>
            <button className={s.buttonSearch}>Показать</button>
        </div>
        <TableButtons/>
        <TableFilter/>
        <div className={s.table}>
            {tableData.map(row => {
                return <div key={row.id} className={s.borderRow}>
                    <TableRow name={row.name} book={row.book} server={row.server} bookMark={row.bookMark}/>
                </div>
            })}
        </div>
        <div className={s.pagination}>
        <Pagination count={14} page={page} onChange={setPage}/>
        </div>
    </div>
}