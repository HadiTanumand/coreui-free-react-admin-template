import React, { useState } from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

const Pagination = ({ total, getContract }) => {
  let item = [] ;
  const pageNumber = Math.ceil(total / 10)
  for (let i = 1; i <= pageNumber; i++) {
    item.push(i)
  }

  console.log(item);

  return (
    <>
      <CPagination
        style={{ direction: 'ltr' }}
        className="mt-5 justify-content-center m-3"
        aria-label="Page navigation example"
      >
        {item.map((i, index) => {
          return <CPaginationItem
            onClick={() => getContract((index * 10))}
            style={{ cursor: 'pointer' }}
          >
            {i}
          </CPaginationItem>
        })}
      </CPagination>
    </>
  )
}

export default Pagination
