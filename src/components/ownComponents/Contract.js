import React from 'react'
import { CCard, CProgress, CProgressBar, CFormSelect, CRow, CButton } from '@coreui/react'
import { DocsExample } from 'src/components';
import PersonalInfo from './PersonalInfo';
import CustomerService from './CustomerService';
import PartyService from './PartyService';
import PhotographyService from './PhotographyService';
import MahzarService from './MahzarService';
const Contract = () => {
  return (
    <>
      <div className="container bg-white p-4 ">
        <div className='mt-3'>
          <CProgress height={35} className="mb-4">
            <CProgressBar color="success" variant="striped" animated value={10} />
          </CProgress>
        </div>
        <div className='m-4'>
        components
        </div>

        <div>
          <CButton color="success" className="text-light m-4" onClick={()=>{alert('hi')}}>
            مرحله بعد
          </CButton>
          <CButton color="danger" className="text-light m-4">
            مرحله قبل
          </CButton>
        </div>
      </div>
    </>

    // <>
    //   <CFormSelect aria-label="Default select example" className='text-center'>
    //     <option>انتخاب نوع قرارداد</option>
    //     <option value="1">جشن</option>
    //     <option value="2">باغ</option>
    //     <option value="3">فرمالیته</option>
    //   </CFormSelect>

    //   <div className='container rounded mt-4 border shadow p-3 d-flex flex-row mb-3 justify-content-evenly'>
    //     <CFormCheck id="flexCheckDefault" label="ماشین" className="checkbox-lg" />
    //     <CFormCheck id="flexCheckChecked" label="لباس"  className='' />
    //   </div>
    //   <div className='container rounded mt-4 border shadow p-3 d-flex flex-row mb-3 justify-content-evenly'>
    //     <CFormCheck id="flexCheckDefault" label="Default checkbox" className="" />
    //     <CFormCheck id="flexCheckChecked" label="Checked checkbox"  className='' />
    //   </div>
    //   <div className='container rounded mt-4 border shadow p-3 d-flex flex-row mb-3 justify-content-evenly'>
    //     <CFormCheck id="flexCheckDefault" label="Default checkbox" className="" />
    //     <CFormCheck id="flexCheckChecked" label="Checked checkbox"  className='' />
    //   </div>
    //   <CButton color='success' className='text-light m-4'>
    //   ثبت و تایید قرارداد
    //   </CButton>
    //   <CButton color='danger' className='text-light m-4'>
    //    انصراف
    //   </CButton>
    // </>
  )
}

export default Contract
