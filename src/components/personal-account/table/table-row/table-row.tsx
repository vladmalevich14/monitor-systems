import React from 'react';
import s from './table-row.module.css'
import Book from '../../../assets/svg/book.svg'
import Server from '../../../assets/svg/server.svg'
import BookMark from '../../../assets/svg/bookmark.svg'
import ArrowRight from '../../../assets/svg/arrow-right.svg'

type PropsType = {
    name: string
    book: number
    server: number
    bookMark: number
}

export const TableRow = ({name, book, server, bookMark}: PropsType) => {
    return <div className={s.row}>
        <tr className={s.tableRowContainer}>
            <td className={s.cellName}>{name}</td>
            <div>
            <td>
                <div className={s.cell}>
                    <img src={Book} alt="book"/>
                    <span className={book === 0 ? s.zero : s.number}>{book}</span>
                    <img src={ArrowRight} alt="arrow right"/>
                </div>
            </td>
            <td>
                <div className={s.cell}>
                    <img src={Server} alt="server"/>
                    <span className={server === 0 ? s.zero : s.number}>{server}</span>
                    <img src={ArrowRight} alt="arrow right"/>
                </div>
            </td>
            <td>
                <div className={s.cell}>
                    <img src={BookMark} alt="book mark"/>
                    <span className={bookMark === 0 ? s.zero : s.number}>{bookMark}</span>
                    <img src={ArrowRight} alt="arrow right"/>
                </div>
            </td>
            </div>
        </tr>

    </div>
}