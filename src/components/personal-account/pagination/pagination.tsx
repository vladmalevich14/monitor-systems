import React, { FC, ReactNode } from 'react'

import s from 'components/personal-account/pagination/pagination.module.css'
import {usePagination} from "./usePagination";
import {NextButton, PrevButton} from "./navigationButtons";
import {MainPaginationButtons} from "./mainPaginationButtons";

export type PaginationProps = {
  count: number
  page: number
  onChange: (page: number) => void
  siblings?: number
  perPageOptions?: number[] | string[]
  children?: ReactNode
}

export const Pagination: FC<PaginationProps> = ({
  onChange,
  count,
  page,
  siblings,
  children,

}) => {
  const {
    paginationRange,
    isLastPage,
    isFirstPage,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,
  } = usePagination({
    page,
    count,
    onChange,
    siblings,
  })


  return (
    <div className={s.root}>
      <div className={s.container}>
        <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage} />
        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />
        <NextButton onClick={handleNextPageClicked} disabled={isLastPage} />

      </div>
      <div>{children}</div>
    </div>
  )
}
