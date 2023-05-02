import React from 'react'
import { CPagination , CPaginationItem } from '@coreui/react'

const Pagination = ({total}) => {

  const pageNumber = Math.ceil(total/10);
const item = []
  for(let i=1 ; i<pageNumber ; i++){
    item.push(
      <CPaginationItem>{i}</CPaginationItem>
    )
  }

  return (
    <>
      <CPagination
      style={{direction:'ltr'}}
        className="mt-5 justify-content-center"
        aria-label="Page navigation example"
      >
       {item} 
      </CPagination>
    </>
  )
}

export default Pagination
